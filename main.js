const PHONETIC_MAPPING = {
	0: "Zero",
	1: "One",
	2: "Two",
	3: "Three",
	4: "Four",
	5: "Five",
	6: "Six",
	7: "Seven",
	8: "Eight",
	9: "Nine",
};

/**
 * Gets the phonetic equivalent of an integer.
 *
 * @param {Number} value - an integer that will be parsed into its phonetic equivalent
 * @returns a phonetic equivalent of the value
 */
const toPhonetic = function (value) {
	if (value === 0) {
		return PHONETIC_MAPPING[value];
	}

	const isNegative = value < 0;
	let cursor = Math.abs(value);
	let phoneticStr = "";
	while (cursor > 0) {
		const digit = cursor % 10;
		const phonetic = PHONETIC_MAPPING[digit];
		phoneticStr = phonetic + phoneticStr;
		cursor = Math.floor(cursor / 10);
	}

	if (isNegative) {
		phoneticStr = "Negative" + phoneticStr;
	}

	return phoneticStr;
};

// Get the arguments
const args = process.argv.slice(2);

try {
	const integers = args.map((arg) => parseInt(arg));
	// Check if there are invalid integers
	if (integers.some(Number.isNaN)) {
		throw new Error("Integers are NaN");
	}

	// Compute the output
	const output = integers.map(toPhonetic);
	console.log("Output:", output);
} catch (error) {
	console.error("Error: please input only integer values.");
}
