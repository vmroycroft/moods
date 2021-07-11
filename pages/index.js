import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Switch from 'react-switch';

import MoodSelector from './MoodSelector';
import MoodCalendar from './MoodCalendar';

export default function Home() {
	const [checked, setChecked] = useState(false);

	function handleChange(nextChecked) {
		setChecked(nextChecked);
	}

	return (
		<>
			<Head>
				<title>Moods</title>
				<meta name="description" content="Moods" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="container mx-auto">
				<div className="flex justify-end mt-5 mr-5 sm:mr-0">
					<Switch
						onChange={handleChange}
						checked={checked}
						checkedHandleIcon={<img src="/images/moon.png" />}
						checkedIcon={<img src="/images/stars.png" style={{ paddingTop: '5px', paddingLeft: '8px' }} />}
						onColor="#1e1c52"
						uncheckedHandleIcon={<img src="/images/sun.png" />}
						uncheckedIcon={<img src="/images/clouds.png" />}
						offColor="#93c5fd"
					/>
				</div>
				<div className="grid grid-cols-1 gap-4 2xl:grid-cols-2">
					<MoodSelector />
					<MoodCalendar />
				</div>
			</main>
		</>
	);
}
