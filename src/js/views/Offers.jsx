import React from "react";

import ComponentCover from "./Components/ComponentCover/ComponentCover.jsx";

import offersCover from "../../img/OffersCover.jpg";

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
		</>
	);
};

export default Offers;
