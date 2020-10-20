import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform
} from 'react-native'

const Header = () => {
    return (
        <View>
            <Text style={styles.txtHeader}>Mattucoins</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    txtHeader: {
        paddingTop: Platform.OS === 'ios' ? 40 : 6,
        fontFamily: 'Lato-Black',
        backgroundColor: '#5E49E2',
        paddingBottom: 10,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 20,
        color: '#FFF',
        marginBottom: 30
    }
})
