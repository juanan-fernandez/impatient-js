export function callFunction(func) {
	try {
		const result = func();

		return {
			success: result,
		};
	} catch (e) {
		return {
			failure: e,
		};
	}
}
