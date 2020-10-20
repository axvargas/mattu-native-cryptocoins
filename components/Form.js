import React, { useRef, useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { Picker } from '@react-native-community/picker'
import { useForm, Controller } from 'react-hook-form'
import axios from 'axios'
const Form = ({ setCurrency, setCryptoCurrency, setConsultAPI }) => {
    const [cryptoCoins, setCryptoCoins] = useState([])
    const { control, handleSubmit, errors, setError } = useForm({
        defaultValues: {
            currency: '',
            cryptoCurrency: ''
        }
    })

    const currencyRef = useRef()
    const cryptoCurrencyRef = useRef()

    useEffect(() => {
        const getCryptoCurrencies = async () => {
            const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const response = await axios.get(URL)
            setCryptoCoins(response.data.Data)
        }
        getCryptoCurrencies()
    }, [])

    const onSubmit = (data) => {
        console.log(data)
        setCurrency(data.currency)
        setCryptoCurrency(data.cryptoCurrency)
        setConsultAPI(true)
    }

    return (
        <View>
            <Text style={styles.txtLabel}>Currency</Text>
            <Controller
                name="currency"
                control={control}
                rules={{
                    required: "Select the currency please",
                }}
                render={({ onChange, onBlur, value }) => (
                    <Picker
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) =>
                            onChange(itemValue)
                        }
                        selectedValue={value}
                        ref={currencyRef}
                    >
                        <Picker.Item label="--Select a currency--" value="" />
                        <Picker.Item label="Dollar" value="USD" />
                        <Picker.Item label="Mexican Peso" value="MXN" />
                        <Picker.Item label="Euro" value="EUR" />
                        <Picker.Item label="Pound sterling" value="GBP" />
                    </Picker>
                )}
            />
            {errors.currency && <Text style={styles.txtError}>{errors.currency.message}</Text>}

            <Text style={styles.txtLabel}>Crypto currency</Text>
            <Controller
                name="cryptoCurrency"
                control={control}
                rules={{
                    required: "Select the crypto currency please",
                }}
                render={({ onChange, onBlur, value }) => (
                    <Picker
                        mode="dropdown"
                        onValueChange={(itemValue, itemIndex) =>
                            onChange(itemValue)
                        }
                        selectedValue={value}
                        ref={cryptoCurrencyRef}
                    >
                        <Picker.Item label="--Select a crypto currency--" value="" />
                        {cryptoCoins.map(crypto => (
                            <Picker.Item key={crypto.CoinInfo.Id} label={crypto.CoinInfo.FullName} value={crypto.CoinInfo.Name} />
                        ))}
                    </Picker>
                )}
            />
            {errors.cryptoCurrency && <Text style={styles.txtError}>{errors.cryptoCurrency.message}</Text>}

            <TouchableHighlight
                style={styles.btnQuote}
                onPress={handleSubmit(onSubmit)}
            >
                <Text style={styles.txtBtnQuote}>Quote</Text>
            </TouchableHighlight>
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    txtLabel: {
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        fontSize: 18,
        marginTop: 24
    },
    btnQuote: {
        backgroundColor: '#5E49E2',
        padding: 10,
        marginTop: 28,
        borderRadius: 4
    },
    txtBtnQuote: {
        fontSize: 18,
        fontFamily: 'Lato-Black',
        textAlign: 'center',
        color: '#FFF'
    },
    txtError: {
        fontFamily: 'Lato-Black',
        color: '#5E49E2',
        fontSize: 12
    }
})
