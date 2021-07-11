import { ResponsiveCalendar } from '@nivo/calendar';
import { format, parseISO } from 'date-fns';
import useSWR from 'swr';
import axios from 'axios';

function MoodCalendar() {
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
				<div className="neumorphic card h-full w-2/3 md:w-1/2 mx-auto">
					<ResponsiveCalendar
						data={data}
						direction="vertical"
						from="2021-03-01"
						to="2021-07-12"
						emptyColor="#eeeeee"
						colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
						margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
						yearSpacing={40}
						monthBorderColor="#ffffff"
						dayBorderWidth={2}
						dayBorderColor="#ffffff"
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
