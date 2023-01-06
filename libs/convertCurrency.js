export function convertCurrency(amount, from, to){
	const apiKey = '16fc6f5bf6f54fb1a7158f8163e924d5';
	const endpoint = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;

	return fetch(endpoint)
			.then(response => response.json())
			.then(data => {
				const exchangeRate = data.rates[to];
				const convertedAmount = amount * exchangeRate;
				const roundedAmount = (Math.round(convertedAmount / 100) * 100).toFixed(2);
				const formatter = new Intl.NumberFormat('id-ID', {
					style: 'currency', currency: to,
				});
				return  formatter.format(roundedAmount);
			});

}