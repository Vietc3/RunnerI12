import React, { useState } from "react"
import Modal from "react-native-modal"
import { observer } from "mobx-react-lite"
import { ViewStyle, TouchableOpacity, Dimensions, View, TextStyle, Text } from "react-native"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"
import { RFValue } from "react-native-responsive-fontsize"
import { MaterialIcons, AntDesign } from "@expo/vector-icons"
import { color } from "../../theme"
import { Screen } from "../../components"

export interface ConsolidatingModalProps {
  /**
   * An optional style override useful for padding & margin.
   */
  isModalVisible: boolean
  setModalVisible: () => void
  orderTitle: string
}
const { height: screenHight } = Dimensions.get("window")

const ROOT: ViewStyle = {
  backgroundColor: "white",
  flex: 1,
  paddingHorizontal: wp("5%"),
}
const CONTAINER_TITLE: ViewStyle = {
  width: "100%",
  paddingHorizontal: 10,
  marginTop: 5,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}
const CONSOLIDATING_CONTAINER: ViewStyle = {
  backgroundColor: "#eaeaea",
  borderRadius: 20,
  flexDirection: "column",
  paddingVertical: hp("1%"),
  marginTop: 10,
}
const CONSOLIDATING_TITLE: ViewStyle = {
  paddingHorizontal: wp("5%"),
}

const TITLE: TextStyle = {
  color: color.primary,
  fontSize: RFValue(20, screenHight),
  fontWeight: "bold",
}

const TITLE_GREEN: TextStyle = {
  color: "#004c45",
  fontWeight: "bold",
  fontSize: RFValue(15, screenHight),
  lineHeight: RFValue(20, screenHight),
}

const ITEM_STYLE: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: wp("5%"),
  marginTop: 10,
}
const TITLE_EVENT: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  paddingHorizontal: wp("5%"),
  paddingTop: hp("2%"),
}
const TITLE_PROMOTION: TextStyle = {
  // fontFamily:'SF Pro Text',
  color: "black",
  fontWeight: "bold",

  fontSize: RFValue(17, screenHight),
  lineHeight: RFValue(20, screenHight),
}
const ICON_STYLE: ViewStyle = {
  width: 35,
  height: 35,
  backgroundColor: color.primary,
  borderRadius: 100,
  alignItems: "center",
  flexDirection: "column",

  justifyContent: "center",
}

export const ConsolidatingModal = observer(function ReadyModal(props: ConsolidatingModalProps) {
  const { setModalVisible, isModalVisible, orderTitle } = props
  const [ChooseSlides, setChooseSlides] = useState([false, false, false])
  const [noted, setNoted] = useState(false)

  return (
    <Modal
      isVisible={isModalVisible}
      animationIn="slideInRight"
      animationOut="slideOutRight"
      onBackdropPress={() => setModalVisible()}
      style={{
        backgroundColor: "white",
        margin: 0, // This is the important style you need to set
      }}
    >
      <Screen style={ROOT} preset="scroll" backgroundColor={"white"}>
        <View style={CONTAINER_TITLE}>
          <TouchableOpacity
            onPress={() => setModalVisible()}
            style={{
              flex: 1,
            }}
          >
            <MaterialIcons
              name="arrow-back-ios"
              size={RFValue(24, screenHight)}
              color={color.primary}
            />
          </TouchableOpacity>
          <View style={{ flex: 4, alignItems: "center" }}>
            <Text style={TITLE}>{orderTitle}</Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }} />
        </View>

        <View
          style={{
            alignItems: "flex-start",
            marginTop: 25,
          }}
        >
          <Text style={{ ...TITLE_GREEN, color: color.primary }}>4 items</Text>
        </View>

        {[1, 2, 3].map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() =>
                setChooseSlides((pre) => {
                  pre[item] = !pre[item]
                  return [...pre]
                })
              }
              key={item}
              style={{
                height: hp("15%"),
              }}
            >
              <View
                style={{
                  ...TITLE_EVENT,
                  paddingHorizontal: 0,
                  height: "100%",
                  borderBottomWidth: 0.2,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <Text style={TITLE_PROMOTION}>Bacon</Text>
                  <Text style={{ ...TITLE_PROMOTION, fontWeight: "normal", color: "#707070" }}>
                    Pumpkin
                  </Text>
                  <Text style={{ ...TITLE_PROMOTION, fontWeight: "normal", color: "#707070" }}>
                    Portobello Mushroom
                  </Text>
                  <Text style={{ ...TITLE_PROMOTION, fontWeight: "normal", color: "#707070" }}>
                    Cheese
                  </Text>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <View style={ICON_STYLE}>
                    <Text style={{ color: "white", fontWeight: "bold" }}>{index + 1}</Text>
                  </View>

                  <View style={{ marginTop: hp(1) }}>
                    <AntDesign
                      name="checkcircle"
                      size={35}
                      color={ChooseSlides[item] === true ? "rgb(7,186,170)" : "#D7D2CB"}
                    />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )
        })}
        <TouchableOpacity onPress={() => setNoted(!noted)} style={CONSOLIDATING_CONTAINER}>
          <View style={CONSOLIDATING_TITLE}>
            <Text style={{ ...TITLE_GREEN, color: "red", fontWeight: "normal" }}>
              Please don't put mayonnaise in the burger
            </Text>
          </View>

          <View
            style={{
              bottom: 0,
              justifyContent: "flex-end",
              flexDirection: "row",
              paddingTop: hp("2%"),
              paddingRight: wp("2%"),
            }}
          >
            <AntDesign
              name="checkcircle"
              size={35}
              color={noted === true ? "rgb(7,186,170)" : "#D7D2CB"}
            />
          </View>
        </TouchableOpacity>
      </Screen>
    </Modal>
  )
})
