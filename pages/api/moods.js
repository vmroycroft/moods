import dbConnect from '../../util/dbConnect';
import Mood from '../../models/Mood';

export default async (req, res) => {
	const { body, method } = req;

	await dbConnect();

	switch (method) {
		case 'GET':
			try {
				const moods = await Mood.find({});
				res.status(200).json(moods);
			} catch (error) {
				res.status(400).end('Unable to get moods.');
			}
			break;

		case 'POST':
			try {
				const mood = await Mood.create(body);
				res.status(201).json(mood);
			} catch (error) {
				res.status(400).end('Unable to save mood.');
			}
			break;

		default:
			res.setHeader('Allow', ['GET', 'POST']);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
};
