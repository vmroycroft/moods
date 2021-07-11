import { ResponsiveCalendar } from '@nivo/calendar';
import { format, parseISO } from 'date-fns';
import { sample } from 'lodash';
import useSWR from 'swr';
import axios from 'axios';

function MoodCalendar() {
	// Tailwind colors 900, 700, 500, 300
	const colors = {
		orange: ['#7C2D12', '#C2410C', '#F97316', '#FDBA74'],
		lime: ['#365314', '#4D7C0F', '#84CC16', '#BEF264'],
		emerald: ['#064E3B', '#047857', '#10B981', '#6EE7B7'],
		sky: ['#0C4A6E', '#0369A1', '#0EA5E9', '#7DD3FC'],
		purple: ['#581C87', '#7E22CE', '#A855F7', '#D8B4FE'],
		pink: ['#831843', '#BE185D', '#EC4899', '#F9A8D4']
	};

	const MOOD_VALUES = {
		Great: 1,
		Meh: 2,
		'Not Good': 3
	};

	const fetcher = (url) =>
		axios.get(url).then((res) => {
			const moods = res.data.map((mood) => {
				const entry = { day: format(parseISO(mood.createdAt), 'y-MM-dd') };

				if (mood.name === 'Great') entry.value = MOOD_VALUES.Great;
				else if (mood.name === 'Meh') entry.value = MOOD_VALUES.Meh;
				else entry.value = MOOD_VALUES['Not Good'];

				return entry;
			});

			return moods;
		});

	const { data, error } = useSWR('/api/moods', fetcher);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

	return (
		<div className="h-screen">
			<div className="h-full py-5 md:py-10">
				<div className="card h-full w-2/3 md:w-1/2 mx-auto">
					<ResponsiveCalendar
						data={data}
						direction="vertical"
						from="2021-03-01"
						to="2021-07-12"
						emptyColor="#eeeeee"
						colors={sample(colors)}
						margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
						yearSpacing={40}
						monthBorderColor="#ffffff"
						dayBorderWidth={2}
						dayBorderColor="#ffffff"
						theme={{ textColor: '#6b6b6b' }}
						tooltip={() => null}
						legends={[
							{
								anchor: 'bottom-right',
								direction: 'row',
								translateY: 36,
								itemCount: 4,
								itemWidth: 42,
								itemHeight: 36,
								itemsSpacing: 14,
								itemDirection: 'right-to-left'
							}
						]}
					/>
				</div>
			</div>
		</div>
	);
}

export default MoodCalendar;
