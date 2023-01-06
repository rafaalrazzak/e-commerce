export default function toCurrency(value){
	return new Intl.NumberFormat('id-ID', {
		style: 'currency', currency: 'IDR',
		maximumFractionDigits: 0
	}).format(value)
}