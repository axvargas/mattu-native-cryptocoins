import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Quotation = ({ quote }) => {
    return (
        <View style={styles.vwQuotation}>
            <Text style={[styles.txtLabel, styles.txtPrice]}>
                <Text style={styles.txtSpan}>{quote.PRICE}</Text>
            </Text>
            <Text style={styles.txtLabel}> Highest value today: {' '}
                <Text style={styles.txtSpan}>{quote.HIGHDAY}</Text>
            </Text>
            <Text style={styles.txtLabel}> Lowest value today: {' '}
                <Text style={styles.txtSpan}>{quote.LOWDAY}</Text>
            </Text>
            <Text style={styles.txtLabel}> Variation last 24 hours: {' '}
                <Text style={styles.txtSpan}>{quote.CHANGEPCT24HOUR}</Text>
            </Text>
            <Text style={styles.txtLabel}> Last update: {' '}
                <Text style={styles.txtSpan}>{quote.LASTUPDATE}</Text>
            </Text>
        </View>
    )
}

export default Quotation

const styles = StyleSheet.create({
    vwQuotation: {
        backgroundColor: '#5E49E2',
        padding: 20,
        marginTop: 20
    },
    txtLabel: {
        color: '#FFF',
        fontFamily: 'Lato-Regular',
        fontSize: 18,
        marginBottom: 10
    },
    txtSpan: {
        fontFamily: 'Lato-Black',
    },
    txtPrice: {
        fontSize: 34,
        textAlign: 'center'
    }
})
