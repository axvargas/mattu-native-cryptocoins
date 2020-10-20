import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	Image,
	View,
	ScrollView,
	ActivityIndicator
} from 'react-native';
import Form from './components/Form';

import Header from './components/Header'
import Quotation from './components/Quotation';
const App = () => {
	const [currency, setCurrency] = useState('')
	const [cryptoCurrency, setCryptoCurrency] = useState('')
	const [consultAPI, setConsultAPI] = useState(false)
	const [quote, setQuote] = useState(null)
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		const quoteCurrency = async () => {
			setLoading(true)
			const URL = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency},ETH&tsyms=${currency}`
			const response = await axios.get(URL)
			setQuote(response.data.DISPLAY[cryptoCurrency][currency])
			setLoading(false)
		}
		if (consultAPI) {
			quoteCurrency()
			setConsultAPI(false)
		}
	}, [consultAPI])
	console.log(loading);
	return (
		<ScrollView>
			<Header />
			<Image
				source={require('./assets/img/cryptomonedas.png')}
				style={styles.img}
			/>
			<View style={styles.vwFormContainer}>
				<Form
					currency={currency}
					cryptoCurrency={cryptoCurrency}
					setCurrency={setCurrency}
					setCryptoCurrency={setCryptoCurrency}
					setConsultAPI={setConsultAPI}
				/>
			</View>
			{	loading &&
				<View style={{ marginTop: 40 }}>
					<ActivityIndicator size="large" color='#5E49E2' />
				</View>
			}
			{quote && !loading &&
				<Quotation quote={quote} />
			}

		</ScrollView>
	);
};

const styles = StyleSheet.create({
	img: {
		width: '100%',
		height: 150,
		marginHorizontal: '2.5%'
	},
	vwFormContainer: {
		marginHorizontal: '2.5%'
	}
});

export default App;
