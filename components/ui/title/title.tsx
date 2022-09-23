import * as React from "react"
import { Text } from "react-native"
import styles from "./title.style"

type Props = {
  title: string
}

const Title = ({ title }: Props) => <Text style={styles.title}>{title}</Text>

export default Title
