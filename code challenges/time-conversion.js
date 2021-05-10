/**
 * Converts time string format 
 * from hh:mm:ssAM or hh:mm:ssPM to
 * HH:mm:ss 
 * 
 * @param {string} s input time to be converted 
 */
const timeConversion = (s) => {

	const journey = s.slice(s.length - 2);

	const timeParts = s.slice(0, s.length - 2).split(':');

	const hours = timeParts[0];
	const minsSecs = `${timeParts[1]}:${timeParts[2]}`;

	return journey === 'AM' ?
		hours === '12' ? `00:${minsSecs}`
			: `${hours}:${minsSecs}`
		: hours === '12' ? `${hours}:${minsSecs}`
			: +hours + 12 === 24 ? `00:${minsSecs}`
				: `${+hours + 12}:${minsSecs}`;

};

console.log(timeConversion('3:30:34PM'));
console.log(timeConversion('12:30:34PM'));
console.log(timeConversion('12:30:34AM'));