export function arrayToString(CMYK) {
	let text = CMYK.reduce((acc, curr, idx) => acc + (idx + 1) + '. ' + curr + '\n', '');
	const text2 = text.slice(0, -1);
	return text2;
}
