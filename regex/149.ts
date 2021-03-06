import { Regex } from '../models';

module.exports = {
	expression: new RegExp("^((?=.*liability))((?=.*exceed)|(?=.*paid by you))|(?=.*paid by the user))", "i"),
	case ID: 149,
	name: "Any liability on behalf of the service is only limited to the fees you paid as a user"
} as Regex;
