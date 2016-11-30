/**
 * Filter out password and credit card number from log object
 * 
 * @param {Object} logObj 
 * @return {Object} 
 * @example
 * filterSensitive({username: abc, password: abcdefg, credit: '4564188001337578'})
 * // return {username: abc, password: ******}
 */
function filterSensitive(logObj) {
    var newLogObj = JSON.parse(JSON.stringify(logObj));
    Object.keys(newLogObj).forEach(function(key) {

        // filter out password
        if (key.toLowerCase().indexOf("password") >= 0) {
            newLogObj[key] = "******";
        }

        // filter out credit card number
        if (typeof newLogObj[key] === 'string' && validCreditCard(newLogObj[key])) {
            newLogObj[key] = newLogObj[key].replace(/\d(?=\d{4})/g, "*")
        }

    });
    return newLogObj
}

/**
 * Determine if a string is credit card number
 * ref: https://gist.github.com/DiegoSalazar/4075533
 * 
 * @param  {String} value
 * @return {Boolean}
 */
function validCreditCard(value) {
	// accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(value)) return false;

    // The Luhn Algorithm. It's so pretty.
    var nCheck = 0, nDigit = 0, bEven = false;
    value = value.replace(/\D/g, "");

    for (var n = value.length - 1; n >= 0; n--) {
        var cDigit = value.charAt(n),
        nDigit = parseInt(cDigit, 10);

        if (bEven) {
            if ((nDigit *= 2) > 9) nDigit -= 9;
        }

        nCheck += nDigit;
        bEven = !bEven;
    }

    return (nCheck % 10) == 0;
}

module.exports = filterSensitive;