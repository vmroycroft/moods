import Head from 'next/head';

import MoodSelector from './MoodSelector';
import MoodCalendar from './MoodCalendar';

export default function Home() {
	return (
		<>
			<Head>
				<title>Moods</title>
				<meta name="description" content="Moods" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="container mx-auto">
				<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
					<MoodSelector />
					<MoodCalendar />
				</div>
			</main>
		</>
	);
}
