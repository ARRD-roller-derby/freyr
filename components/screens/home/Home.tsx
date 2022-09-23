import * as React from "react"
import { View, Button } from "react-native"
import DefaultLayout from "../../layouts/defaultLayout/defaultLayout"
import type { NativeStackScreenProps } from "@react-navigation/native-stack"
import styles from "./home.style"
import { RootStackParamList } from "../../../types/RootStackParamList.type"
import Title from "../../ui/title/title"

const Home = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Home">) => (
  <DefaultLayout>
    <View style={styles.container}>
      <View style={styles.item}>
        <Title title="Choose your timer" />
      </View>

      <View style={styles.item}>
        <Button
          color="#378f6a"
          onPress={() => navigation.navigate("Track")}
          title="Track"
        />
      </View>
      <View style={styles.item}>
        <Button
          color="#378f6a"
          onPress={() => navigation.navigate("Jail")}
          title="Jail"
        />
      </View>
    </View>
  </DefaultLayout>
)

export default Home
