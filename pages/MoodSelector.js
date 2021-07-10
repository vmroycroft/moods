import Image from 'next/image';

import great from '../public/images/great.png';
import meh from '../public/images/meh.png';
import notGood from '../public/images/not-good.png';

function MoodSelector() {
	return (
		<div className="flex flex-col justify-center h-screen text-center">
			<div className="m-4">
				<Image src={great} alt="Great" width={200} height={200} quality={100} placeholder="blur" />
			</div>
			<div className="m-4">
				<Image src={meh} alt="Meh" width={200} height={200} quality={100} placeholder="blur" />
			</div>
			<div className="m-4">
				<Image src={notGood} alt="Not Good" width={200} height={200} quality={100} placeholder="blur" />
			</div>
		</div>
	);
}

export default MoodSelector;
