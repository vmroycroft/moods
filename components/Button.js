import Image from 'next/image';

function Button({ image, alt, onClick, className }) {
	return (
		<div className={`button ${className}`} onClick={onClick}>
			<Image src={image} alt={alt} width={175} height={175} quality={100} placeholder="blur" />
		</div>
	);
}

export default Button;
