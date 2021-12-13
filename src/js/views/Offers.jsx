import React from "react";

import ComponentCover from "./Components/ComponentCover/ComponentCover.jsx";

import offersCover from "../../img/OffersCover.jpg";
import HorizontalCard from "./Components/HorizontalCard.jsx";

import egypt from "../../img/EgyptPyramids.jpg";

const Offers = () => {
	return (
		<>
			<ComponentCover
				imgSrc={offersCover}
				imgAlt="Offers Cover"
				title="Offers"
				text1="Travel more and spend less!"
				text2="Our best travel deals."
			/>
			<HorizontalCard
				imgSrc={egypt}
				imgAlt="Egypt Pyramids"
				title="Egypt"
				text1="9 days and 7 nights"
				text2={
					<ul>
						<li>7 nights at a 4 stars hotel</li>
						<li>Nile river cruise</li>
						<li>Guided tours</li>
					</ul>
				}
			/>
			<HorizontalCard imgSrc={egypt} imgAlt="Egypt Pyramids" title="Egypt" text1="" text2="" />
			<HorizontalCard imgSrc={egypt} imgAlt="Egypt Pyramids" title="Egypt" text1="" text2="" />
			<HorizontalCard imgSrc={egypt} imgAlt="Egypt Pyramids" title="Egypt" text1="" text2="" />
		</>
	);
};

export default Offers;
