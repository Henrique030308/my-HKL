import { StyleSheet, SafeAreaView, Image, Platform, StatusBar } from 'react-native'

import Sesc from '../../assets/img/logoSesc.png';
import Cafe from '../../assets/img/logoCafe.png';
import Senac from '../../assets/img/logoSenac.png';

export default function Header() {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={Sesc} style={styles.logo} />
            <Image source={Cafe} style={styles.logo} />
            <Image source={Senac} style={styles.logo} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#005594',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        height: 90,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0,
    },
    logo: {
        width: 90,
        height: 70,
        resizeMode: 'contain',
        marginHorizontal: 10,
        alignSelf: 'center',
    }
})