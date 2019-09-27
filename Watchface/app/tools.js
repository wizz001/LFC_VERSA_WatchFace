/** @function listProperties
 * Lists all of the properties for a given object.
 */
export function listProperties(object) {
	for (var key in object) {
		try {
			console.log('Key: ' + key + ' | value: ' + object[key]);
			// recursion breaks the simulator
			// if ( object[key] == '[object Object]') {
			//   listProperties(object[key], '    ' + key + '.');
			// }
		} catch (error) {
			// Some values throw an error when trying to access them.
			console.log('Key: ' + key + ' | Error: ' + error.message);
		}
	}
}

/** @function zeroPad
 * Add zero in front of numbers < 10
 * @param {number} number Number to add commas too.
 * @return {string} Returns the number with a leading zero (0)
 */
export function zeroPad(number) {
	if (number < 10) {
		number = "0" + number;
	}
	return number;
}

/** @function addCommas
 * Adds commas to a number
 * @param {number} number Number to add commas too.
 * @return {string} Returns the number with commas.
 */
export function addCommas(number) {
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/** @function addCommas
 * Adds commas to a number
 * @param {int} day Day of the week (1-7)
 * @return {string} The name day of the weekday.
 */
export function dayOfWeek(day) {
	switch (day) {
		case 0:
			return 'Sun';
		case 1:
			return 'Mon';
		case 2:
			return 'Tue';
		case 3:
			return 'Wed';
		case 4:
			return 'Thu';
		case 5:
			return 'Fri';
		case 6:
			return 'Sat';
	}
}
  export function monthOfTheYear(month) {
	switch (month) {
		case 0:
			return 'Jan';
		case 1:
			return 'Feb';
		case 2:
			return 'Mar';
		case 3:
			return 'Apr';
		case 4:
			return 'May';
		case 5:
			return 'June';
		case 6:
			return 'Jul';
    case 7:
      return 'Aug';
    case 8: 
      return 'Sep';
    case 9:
			return 'Oct';
    case 10:
      return 'Nov';
    case 11: 
      return 'Dec';
	}
  }
  
/** @function addCommas
 * Convert a number to a special monospace number
 * @param {number} digits Day of the week (1-7)
 * @return {string} Returns special monospace number
 */
export function monoDigits(digits) {
	var ret = "";
	var str = digits.toString();
	for (var index = 0; index < str.length; index++) {
		var num = str.charAt(index);
		ret = ret.concat(hex2a("0x1" + num));
	}
	return ret;
}

/** @function addCommas
 * Hex to string
 * @param {hex} hex HEX value
 * @return {string} Returns the hex value converted to a string
 */
// 
export function hex2a(hex) {
	var str = '';
	for (var index = 0; index < hex.length; index += 2) {
		var val = parseInt(hex.substr(index, 2), 16);
		if (val) str += String.fromCharCode(val);
	}
	return str.toString();
}
