import React from "react";
import AboutHeader from "./Components/AboutHeader.jsx";
import BlogCard from "./Components/BlogCard.jsx";
import Recife from "../../img/Recife.jpg";
import AngelFalls from "../../img/AngelFalls.jpg";
import Seafood from "../../img/Seafood.jpg";
import TravelGuide from "../../img/TravelGuide.jpg";
import HappyCouple from "../../img/HappyCouple.jpg";
import Iceland from "../../img/Iceland.jpg";

const Vacations = () => {
	return (
		<>
			<AboutHeader
				title="4Geeks Travel"
				paragraph="Here you have some ideas to plan your perfect vacation. What are you waiting for?"
			/>
			<div className="container">
				<div className="row">
					<BlogCard
						image={Recife}
						alt="Recife, Brasil"
						title="7 days in Recife"
						text="Dubbed the “Venice of Brazil” for the abundance of picturesque waterways that sliver throughout the city, Recife is a touristic and commercial powerhouse in northern Brazil and a must for travelers traversing the region."
						updatedDate="Last updated 3 mins ago"
					/>
					<BlogCard
						image={AngelFalls}
						alt="Angel Falls, Venezuela"
						title="5 days in Canaima"
						text="Buried deep in the heart of the southeastern jungles of Venezuela is a natural marvel so phenomenal that it has to be seen to be believed. Angel Falls, the highest waterfall in the world."
						updatedDate="Last updated 2 days ago"
					/>
					<BlogCard
						image={Seafood}
						alt="Fried Fish"
						title="Authentic Eats in the Caribbean and Mexico"
						text="From picturesque beaches to nearly-perfect weather to an abundance of all-inclusive resorts, visitors to the Caribbean and Mexico rarely want for nothing."
						updatedDate="Last updated 5 days ago"
					/>
				</div>
				<div className="row">
					<BlogCard
						image={TravelGuide}
						alt="Map"
						title="Our 2022 Travel Planning Guide"
						text="In the rapidly changing landscape, knowing the current guidelines and restrictions is essential. To best provide you with the knowledge you need, we’ve gathered a number of important resources to help you plan your perfect trip."
						updatedDate="Last updated 1 week ago"
					/>
					<BlogCard
						image={HappyCouple}
						alt="Happy couple at the beach"
						title="The Benefits of Booking Vacations Early"
						text="Sometimes last-minute vacations are exactly what you need to find relaxation after a particularly stressful time or get a thrill from throwing caution to the wind and just going."
						updatedDate="Last updated 2 weeks ago"
					/>
					<BlogCard
						image={Iceland}
						alt="Iceland mountains"
						title="5 Days in Iceland"
						text="There is no place on the planet even remotely like Iceland. Incomparable and amazing, an Iceland vacation should be on every travel enthusiast’s bucket list."
						updatedDate="Last updated 3 weeks ago"
					/>
				</div>
			</div>
		</>
	);
};

export default Vacations;
