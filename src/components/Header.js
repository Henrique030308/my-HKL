import { StyleSheet, SafeAreaView, Image, Platform, StatusBar, Dimensions } from 'react-native'

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

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        width: windowWidth,
        backgroundColor: '#005594',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 90,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 0 : 0,
    },
    logo: {
        width: windowWidth * 0.25, // 25% da largura da tela
        height: 70,
        resizeMode: 'contain',
        marginHorizontal: 5,
        alignSelf: 'center',
    }
})