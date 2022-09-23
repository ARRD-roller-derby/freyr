import { StyleSheet } from "react-native"
import { Colors } from "../../../types/colors.enum"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    color: Colors.second,
  },
  item: {
    padding: 15,
  },
})

export default styles
