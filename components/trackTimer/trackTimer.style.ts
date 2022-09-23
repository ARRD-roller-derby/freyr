import { StyleSheet } from "react-native"
import { Colors } from "../../types/colors.enum"

const styles = StyleSheet.create({
  container: {
    alignContent: "stretch",
    height: "100%",
  },
  option: {
    padding: 10
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
  },
  timer: {
    flex: 2,
    textAlign: "center",
    justifyContent: "center",
  },
  finish: {
    backgroundColor: Colors.error,
  },
  progress: {
    backgroundColor: Colors.arrd,
  },
  time: {
    fontSize: 80,
    fontWeight: "500",
    textAlign: "center",
  },
  stop:{
    fontSize: 80,
    fontWeight: "400",
    textAlign: "center",
    opacity:.5
  },
  reset: {
    textAlign: "center",
    fontSize: 20,
  },
  jam: {
    paddingBottom: 10,
    textAlign: "center",
    fontSize: 20,
  },
})

export default styles
