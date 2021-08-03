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
const { height: screenHight } = Dimensions.get("window")

export interface GetLockerModalProps {
  /**
   * An optional style override useful for padding & margin.
   */
  isModalVisible: boolean
  setModalVisible: () => void
  setModaOrderlVisible: () => void
}
const CONTAINER_TITLE: ViewStyle = {
  width: "100%",
  paddingHorizontal: 10,
  marginTop: 5,
  backgroundColor: "white",
  height: hp("35%"),
  borderRadius: 15,
}
const TITLE: TextStyle = {
  color: color.primary,
  fontSize: RFValue(20, screenHight),
  lineHeight: RFValue(22, screenHight),
  fontWeight: "bold",
  letterSpacing: 0.22,
}
const BUTTON_MODAL: ViewStyle = {
  flexDirection: "row",
  display: "flex",
  width: "100%",
  height: hp("10%"),
  paddingHorizontal: wp("5%"),
  paddingVertical: hp("2%"),
  marginTop: 15,
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
export const GetLockerModal = observer(function GetLockerModal(props: GetLockerModalProps) {
  const { setModalVisible, isModalVisible, setModaOrderlVisible } = props

  return (
    <Modal
      isVisible={isModalVisible}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      onBackdropPress={() => setModalVisible()}
      style={{
        margin: 0,
        justifyContent: "flex-end",
      }}
    >
      <View style={CONTAINER_TITLE}>
        <View style={{ alignItems: "center", marginTop: 15 }}>
          <Text style={TITLE}>Put to Locker</Text>
        </View>
        <View style={{ alignItems: "center", marginTop: 25 }}>
          <Text
            style={{
              ...TITLE,
              fontSize: RFValue(60, screenHight),
              lineHeight: RFValue(65, screenHight),
            }}
          >
            A10
          </Text>
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text style={{ ...TITLE, fontWeight: "normal", fontSize: RFValue(18, screenHight) }}>
            Get another locker
          </Text>
        </View>
        <View style={{ ...BUTTON_MODAL, backgroundColor: "white" }}>
          <Button
            onPress={async () => {
              await setModalVisible()
              setModaOrderlVisible()
            }}
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
              Comfirm
            </Text>
          </Button>
        </View>
      </View>
    </Modal>
  )
})
