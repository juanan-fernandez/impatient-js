export function monthToNumber(x) {
	const meses = [0, 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	if (x === 0 || x > meses.length) throw new Error('Unknown number: ' + x);
	return meses[x];
}
