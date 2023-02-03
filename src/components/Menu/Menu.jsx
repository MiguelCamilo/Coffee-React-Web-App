import { useState } from "react";
import "./menu.css"

export default function Menu() {
	const [coffees, setCoffees] = useState();
	const [message, setMessage] = useState('Welcome to the Beau Café')

	// func to fetch api data
	const getCoffees = (temp) => {
		setTimeout(() => {
			setMessage('Loading...') // setMessage to loading after button is clicked
			fetch(`https://api.sampleapis.com/coffee/${temp}`)
				.then((res) => res.json())
				.then(setCoffees) // shorter version than data => setCoffees(data)
				.catch((err) => console.error(err));
		}, 2000);
	};
	return (
		<article>
			<div>
				<button  onClick={() => getCoffees("hot")}>Hot Coffees</button>
				<button onClick={() => getCoffees("iced")}>Iced Coffees</button>
			</div>
			{/* if no coffees are listed then h2 if coffees then produce a list of coffee titles  */}
			{!coffees ? (
				<h2>{message}</h2>
			) : (
				<section className="coffee-container">
					{coffees.map((coffee) => (
						<div key={coffee.id} className="coffee-card">
							<img src={coffee.image} alt={coffee.title} />
							<h3> {coffee.title}</h3>
							<p>{coffee.description}</p>
						</div>
					))}
				</section>
			)}
		</article>
	);
}
