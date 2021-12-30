export function isObject(x) {
	switch (typeof x) {
		case 'function':
		case 'object':
			return x !== null && true;
		default:
			return false;
	}
	//return x !== null && (typeof x === 'object' || typeof x === 'function');
}
