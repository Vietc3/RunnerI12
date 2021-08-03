import * as React from "react"
import {
  StyleProp,
  TextStyle,
  View,
  ViewStyle,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen"
import { RFValue } from "react-native-responsive-fontsize"
const { height: screenHight } = Dimensions.get("window")
const CONTAINER: ViewStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  flex: 2,
  backgroundColor: "#FFFFFF",
  flexWrap: "wrap",
  marginTop: 15,
}
const WRAP: ViewStyle = {
  flex: 1,
  alignItems: "center",
  height: hp("5%"),
  borderBottomWidth: 0.2,
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: RFValue(14, screenHight),
  paddingTop: hp("1%"),
  color: color.primary,
}

export interface TabsProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>
  tabs: Tabs[]
}

export interface Tabs {
  /**
   * An optional style override useful for padding & margin.
   */
  title: string
  onClick: () => void
}

/**
 * Describe your component here
 */
export const Tabs = observer(function Tabs(props: TabsProps) {
  const [active, setActive] = React.useState(0)
  const { tabs } = props
  return (
    <View style={CONTAINER}>
      {tabs.map((tab, i) => (
        <TouchableOpacity
          key={tab.title}
          style={
            active === i ? { ...WRAP, borderColor: color.primary, borderBottomWidth: 1 } : WRAP
          }
          onPress={() => {
            setActive(i)
            tab.onClick()
          }}
        >
          <Text style={active === i ? TEXT : { ...TEXT, color: "black" }}>{tab.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
})
