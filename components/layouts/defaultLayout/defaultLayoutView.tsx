import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import styles from './defaultLayout.styles';

type Props = {
    children: JSX.Element | JSX.Element[]
}

const defaultLayoutView = ({children}:Props) => <View style={styles.container}>
{children}
<StatusBar style="auto" />
</View>

export default defaultLayoutView