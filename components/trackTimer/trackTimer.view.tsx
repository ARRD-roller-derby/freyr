import { View, Text, TouchableOpacity, Button } from 'react-native';
import styles from "./trackTimer.style"
import { Props, UseProps } from "./trackTimer.type"

const TrackTimerView = ({
  timer,
  start,
  timerString,
  startAndStop,
  reset,
}: UseProps & Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttons}>
        <View style={styles.option}>
            <Button title='New Jam' onPress={reset}/>
 
        </View>
        <View style={styles.option}>
        <Button title='reset' onPress={reset}/>
 
        </View>
      </View>
      <View style={[styles[timer <= 0 ? "finish" : "progress"], styles.timer]}>
        <TouchableOpacity onPress={startAndStop}>
          <Text style={styles[start ? 'time':'stop']}>{timerString}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TrackTimerView
