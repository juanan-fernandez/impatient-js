export function twoParametersWithDefaultValues(x = 0, y = 0) {
	return [x, y];
}

export function restParameters(...args) {
	args.shift();
	return args;
}
