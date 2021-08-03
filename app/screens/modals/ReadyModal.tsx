import React, { useState } from "react"
import Modal from "react-native-modal"
import { observer } from "mobx-react-lite"
import { ViewStyle, TouchableOpacity, Dimensions, View, TextStyle, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"
import { RFValue } from "react-native-responsive-fontsize"
import { MaterialIcons, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons"
import { color } from "../../theme"
import { Screen, Button } from "../../components"
import { GetLockerModal } from "./GetLocker"
import { ConsolidatingModal } from "./Consolidating"
export interface ModalProps {
  /**
   * An optional style override useful for padding & margin.
   */
  isModalVisible: boolean
  setModalVisible: () => void
  orderTitle: string
  isGetLocker: boolean
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
const ICON_LOCKER_STYLE: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  height: 55,
  marginTop: hp("2%"),
}
const ICON_CONTAINE_STYLE: ViewStyle = { flex: 3, alignItems: "center", flexDirection: "row" }
const ICON_STYLE: ViewStyle = {
  width: 35,
  height: 35,
  backgroundColor: color.primary,
  borderRadius: 100,
  alignItems: "center",
  flexDirection: "column",
  marginLeft: wp("1%"),
  justifyContent: "center",
}
const ADDRESS_LOCKER_STYLE: ViewStyle = {
  alignItems: "center",
  flexDirection: "column",
  marginLeft: wp("3%"),
  justifyContent: "center",
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
const CONSOLIDATING_CONTAINER: ViewStyle = {
  backgroundColor: "#eaeaea",
  borderRadius: 20,
  flexDirection: "column",
  paddingVertical: hp("4%"),
  marginTop: 10,
}
const CONSOLIDATING_TITLE: ViewStyle = {
  paddingHorizontal: wp("5%"),
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
const BUTTON_MODAL: ViewStyle = {
  flexDirection: "row",
  display: "flex",
  width: "100%",
  height: hp("10%"),
  paddingHorizontal: wp("5%"),
  paddingVertical: hp("2%"),
  marginBottom: 15,
}
const TITLE_BUTTON_MODAL: TextStyle = {
  // fontFamily:'Futural',
  color: "white",
  textAlign: "left",
  fontWeight: "bold",
  fontSize: RFValue(14, screenHight),
  lineHeight: RFValue(18, screenHight),
  letterSpacing: 0.38,
}

export const ReadyModal = observer(function ReadyModal(props: ModalProps) {
  const { setModalVisible, isModalVisible, orderTitle, isGetLocker } = props
  const [ChooseSlides, setChooseSlides] = useState([false, false, false])
  const [isModaLockerVisible, setModalLockerVisible] = useState(false)
  const [isModaConsoliVisible, setModalConsoli] = useState(false)
  const toggleModal = () => {
    setModalLockerVisible(!isModaLockerVisible)
  }
  const toggleModalConsoli = () => {
    setModalConsoli(!isModaConsoliVisible)
  }
  const navigation = useNavigation()
  const close = () => {
    setModalVisible()
    navigation.navigate("welcome")
  }
  return (
    <Modal
      isVisible={isModalVisible}
      animationIn={isGetLocker ? "slideInRight" : "slideInUp"}
      animationOut={isGetLocker ? "slideOutRight" : "slideOutDown"}
      onBackdropPress={() => setModalVisible()}
      style={{
        backgroundColor: "white",
        margin: 0, // This is the important style you need to set
      }}
    >
      <GetLockerModal
        isModalVisible={isModaLockerVisible}
        setModalVisible={() => setModalLockerVisible(false)}
        setModaOrderlVisible={() => setModalVisible()}
      />
      <ConsolidatingModal
        isModalVisible={isModaConsoliVisible}
        setModalVisible={() => setModalConsoli(false)}
        orderTitle={orderTitle}
      />
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
        <View style={ICON_LOCKER_STYLE}>
          <View style={ICON_CONTAINE_STYLE}>
            <View style={{ ...ICON_STYLE, backgroundColor: "#004c45" }}>
              <MaterialCommunityIcons
                name="bike"
                size={20}
                color="white"
                style={{ transform: [{ scaleX: -1 }] }}
              />
            </View>
            <View style={ICON_STYLE}>
              <Text style={{ color: "white", fontWeight: "bold" }}>I12</Text>
            </View>
            <View style={ADDRESS_LOCKER_STYLE}>
              <Text style={TITLE_GREEN}>Level 1 Locker</Text>
            </View>
          </View>
          <View style={{ ...ICON_CONTAINE_STYLE, flex: 1 }}>
            <Text style={TITLE_GREEN}>1:15 PM</Text>
          </View>
        </View>
        <View style={CONSOLIDATING_CONTAINER}>
          <View style={CONSOLIDATING_TITLE}>
            <Text style={TITLE_GREEN}>Consolidating 2 of 3</Text>
          </View>

          <TouchableOpacity onPress={() => toggleModalConsoli()} style={ITEM_STYLE}>
            <Text style={{ color: "#8c8c91" }}>4 items</Text>

            <MaterialIcons
              name="navigate-next"
              size={RFValue(30, screenHight)}
              color={color.primary}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "flex-start",
            marginTop: 15,
          }}
        >
          <Text style={{ ...TITLE_GREEN, color: color.primary }}>Combine orders</Text>
        </View>

        {[0, 1].map((item) => {
          return (
            <TouchableOpacity
              onPress={() =>
                setChooseSlides((pre) => {
                  pre[item] = !pre[item]
                  return [...pre]
                })
              }
              key={item}
              style={{ width: "100%", height: hp("10%") }}
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
                  <Text style={TITLE_PROMOTION}>B1002-03 HK Roast</Text>
                  <TouchableOpacity style={{ ...ITEM_STYLE, paddingHorizontal: 0 }}>
                    <Text style={{ color: "#8c8c91" }}>4 items</Text>

                    <MaterialIcons
                      name="navigate-next"
                      size={RFValue(30, screenHight)}
                      color={color.primary}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{ marginTop: hp(1) }}>
                  <AntDesign
                    name="checkcircle"
                    size={28}
                    color={ChooseSlides[item] === true ? "rgb(7,186,170)" : "#D7D2CB"}
                  />
                </View>
              </View>
            </TouchableOpacity>
          )
        })}
      </Screen>
      <View style={{ ...BUTTON_MODAL, backgroundColor: "white" }}>
        <Button
          onPress={() => (isGetLocker ? toggleModal() : close())}
          style={{
            backgroundColor: color.primary,
            width: "100%",
            borderRadius: 10,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.26,
            elevation: 8,
          }}
        >
          <Text style={{ ...TITLE_BUTTON_MODAL, fontSize: RFValue(18, screenHight) }}>
            {isGetLocker ? "Get Locker" : "Set to Ready"}
          </Text>
        </Button>
      </View>
    </Modal>
  )
})
