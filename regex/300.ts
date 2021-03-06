import { Regex } from '../models';

module.exports = {
	expression: new RegExp("^((?=.*complaint))((?=.*lodge)|(?=.*file))", "i"),
	caseID: 300,
	name: "The service provides a complaint mechanism for the handling of personal data"
} as Regex;