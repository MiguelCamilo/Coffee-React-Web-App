export default function MenuItem({ image, title, description }) {
	return (
		<div className="coffee-card">
			<img src={image} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
}
