import { version } from '../../package.json';
import { Router } from 'express';
import moment from 'moment'
import url from 'url';

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource

	// perhaps expose some API metadata at the root
	// api.get('/', (req, res) => {
	// 	res.json({ version });
	// });


	api.get('/:time', (req, res) => {
		const time = req.params.time
		const natural = moment(time,'MMMM DD, YYYY').format('MMMM DD, YYYY') === time ? time : null
		const unix = moment.unix(time).isValid() ? time : null
		res.json({ unix,natural });
	});

	// api.use('/',times(Router))

	return api;
}
