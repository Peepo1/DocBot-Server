import { Regex } from '../models';

module.exports = {
	expression: new RegExp("^((?=.*throttle)|(?=.*reduce))((?=.*speed))((?=.*bandwidth)|(?=.*reduce))", "i"),
	caseID: 157,
	name: "This service throttles your use"
} as Regex;
