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
	let phoneticStr = "";
	while (value > 0) {
		const digit = value % 10;
		const phonetic = PHONETIC_MAPPING[digit];
		phoneticStr = phonetic + phoneticStr;
		value = Math.floor(value / 10);
	}
	return phoneticStr;
};

// Get the arguments
const args = process.argv.slice(2);

// Map string to integers, integers to phonetic equivalents
const output = args.map((arg) => parseInt(arg)).map(toPhonetic);
console.log("Output:", output);
