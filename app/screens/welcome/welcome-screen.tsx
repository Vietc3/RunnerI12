import React, { useState } from "react"
import { View, ViewStyle, TextStyle, ImageStyle, Dimensions, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, Wallpaper, AutoImage as Image, Tabs } from "../../components"
import { color, spacing, typography } from "../../theme"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"

import { RFValue } from "react-native-responsive-fontsize"
import { ReadyModal } from "../modals/ReadyModal"
const { height: screenHight } = Dimensions.get("window")

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
}
const CONTAINER_TITLE: ViewStyle = {
  width: "100%",
  paddingHorizontal: 10,
  marginTop: 5,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
}

const TITLE: TextStyle = {
  color: color.primary,
  fontSize: RFValue(20, screenHight),
  fontWeight: "bold",
}
const TITLE_EVENT: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  paddingHorizontal: wp("5%"),
  paddingTop: hp("2%"),
}
const TITLE_PROMOTION: TextStyle = {
  // fontFamily:'SF Pro Text',
  color: color.primary,
  fontWeight: "bold",

  fontSize: RFValue(17, screenHight),
  lineHeight: RFValue(20, screenHight),
}
const ITEM_STYLE: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  paddingHorizontal: wp("5%"),
  marginTop: 10,
}
const TEXT: TextStyle = {
  color: color.primary,
  fontWeight: "bold",
  fontSize: RFValue(15, screenHight),
  lineHeight: RFValue(20, screenHight),
}
const ICON_CONTAINER: ViewStyle = {
  flexDirection: "column",
}

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
  marginTop: 5,
}
export const WelcomeScreen = observer(function WelcomeScreen() {
  const navigation = useNavigation()
  const nextScreen = () => navigation.navigate("L1ScanQR")
  const [ChooseSlides, setChooseSlides] = useState([false, false, false])
  const [view, setView] = useState("POINTS")
  const tabs = [
    {
      title: "Pending Collection",
      onClick: () => {
        setView("POINTS")
      },
    },
    {
      title: "Consolidating",
      onClick: () => {
        setView("VOUCHERS")
      },
    },
    {
      title: "Orthers",
      onClick: () => {
        setView("PACKING")
      },
    },
  ]
  const [isModalVisible, setModalVisible] = useState(false)
  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }
  return (
    <View testID="WelcomeScreen" style={FULL}>
      <ReadyModal
        isModalVisible={isModalVisible}
        setModalVisible={() => setModalVisible(false)}
        orderTitle="B1002-04 Toast Box"
        isGetLocker={true}
      />
      <Screen style={CONTAINER} preset="scroll" backgroundColor={"white"}>
        <View style={CONTAINER_TITLE}>
          <View style={{ flex: 1, alignItems: "center" }} />

          <View style={{ flex: 4, alignItems: "center" }}>
            <Text style={TITLE}>Orders</Text>
          </View>
          <TouchableOpacity
            onPress={() => nextScreen()}
            style={{
              flex: 1,
            }}
          >
            <FontAwesome name="camera" size={RFValue(30, screenHight)} color={color.primary} />
          </TouchableOpacity>
        </View>
        <Tabs tabs={tabs} />

        {[0, 1, 2, 3].map((item) => {
          return (
            <TouchableOpacity
              onPress={() => toggleModal()}
              key={item}
              style={{ width: "100%", height: hp("13%"), paddingHorizontal: wp("4%") }}
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
                  <View style={{ ...ITEM_STYLE, paddingHorizontal: 0 }}>
                    <Text style={{ ...TEXT, color: "black" }}>Consolidating 3 of 3</Text>
                  </View>
                </View>
                <View style={ICON_CONTAINER}>
                  <View style={{ flexDirection: "row", justifyContent: "center" }}>
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
                  </View>
                  <View style={ADDRESS_LOCKER_STYLE}>
                    <Text style={TEXT}>Level 1 Locker</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )
        })}
      </Screen>
    </View>
  )
})
