import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import { TrackUseProps } from "./track.type"
import styles from "./track.styles"
import DefaultLayout from "../../layouts/defaultLayout/defaultLayout"
import TrackTimer from "../../trackTimer/trackTimer"

const TrackView = ({ currentTurn, launch, stop, turns }: TrackUseProps) => (
  <DefaultLayout>
    <View style={styles.turns}></View>
    <View style={styles.timer}>
      <TrackTimer sendTurn={(timer) => console.log("TURN", timer)} />
    </View>
  </DefaultLayout>
)

export default TrackView
