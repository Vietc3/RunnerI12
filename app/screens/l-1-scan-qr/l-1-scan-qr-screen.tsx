import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, TextStyle, Dimensions, TouchableOpacity } from "react-native"
import { Screen, Text, Wallpaper, Header } from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing, typography } from "../../theme"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"
import { RFValue } from "react-native-responsive-fontsize"
import { AntDesign } from "@expo/vector-icons"
import { ReadyModal } from "../modals/ReadyModal"
const ROOT: ViewStyle = {
  backgroundColor: "white",
  flex: 1,
}
const { height: screenHight } = Dimensions.get("window")

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
const FULL: ViewStyle = { flex: 1 }
const CAMERA_QR_CONTAINER: ViewStyle = {
  height: hp("35%"),
  paddingHorizontal: wp("8%"),
  marginTop: hp("5%"),
}
const CAMERA_QR_STYLE: ViewStyle = {
  height: "100%",
  backgroundColor: color.primary,
  borderRadius: 20,
}

export const L1ScanQrScreen = observer(function L1ScanQrScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation()
  const [isModalVisible, setModalVisible] = useState(false)
  const toggleModal = () => {
    setModalVisible(!isModalVisible)
  }
  return (
    <View testID="ScanScreen" style={FULL}>
      <ReadyModal
        isModalVisible={isModalVisible}
        setModalVisible={() => setModalVisible(false)}
        orderTitle="B1002-04 Toast Box"
        isGetLocker={false}
      />
      <Screen style={ROOT} preset="scroll" backgroundColor={"white"}>
        <View style={CONTAINER_TITLE}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              flex: 1,
            }}
          >
            <AntDesign name="close" size={RFValue(30, screenHight)} color={color.primary} />
          </TouchableOpacity>
          <View style={{ flex: 4, alignItems: "center" }}>
            <Text style={TITLE}>Scan Order QR</Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }} />
        </View>
        <View style={CAMERA_QR_CONTAINER}>
          <TouchableOpacity onPress={() => toggleModal()} style={CAMERA_QR_STYLE} />
        </View>
      </Screen>
    </View>
  )
})
