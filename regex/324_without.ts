import { Regex } from '../models';

module.exports = {
	expression: new RegExp("^((?=.*multiple))((?=.*not))((?=.*account))", "i"),
	caseID: 324,
	name: "Service does not allow alternative accounts"
} as Regex;