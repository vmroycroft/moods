import { mutate } from 'swr';
import axios from 'axios';
import { toast } from 'react-toastify';

import Button from '../components/Button';

import great from '../public/images/great.png';
import meh from '../public/images/meh.png';
import notGood from '../public/images/not-good.png';

function MoodSelector() {
	async function handleMoodClick(mood) {
		try {
			await mutate('/api/moods', async () => {
				await axios.post('/api/moods', { name: mood });
				toast.success(`Saved mood: ${mood}`);
			});
		} catch (error) {
			toast.error(error.response.data);
		}
	}

	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<Button image={great} alt="Great" className="m-4" onClick={() => handleMoodClick('Great')} />
			<Button image={meh} alt="Meh" className="m-4" onClick={() => handleMoodClick('Meh')} />
			<Button image={notGood} alt="Not Good" className="m-4" onClick={() => handleMoodClick('Not Good')} />
		</div>
	);
}

export default MoodSelector;
