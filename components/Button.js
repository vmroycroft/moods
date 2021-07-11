import Image from 'next/image';

function Button({ image, alt, onClick, className }) {
	return (
		<div className={`neumorphic button ${className}`} onClick={onClick}>
			<Image src={image} alt={alt} width={200} height={200} quality={100} placeholder="blur" />
		</div>
	);
}

export default Button;
