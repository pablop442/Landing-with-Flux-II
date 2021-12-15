import React from "react";

import ComponentCover from "./Components/ComponentCover/ComponentCover.jsx";

import offersCover from "../../img/OffersCover.jpg";
import ListGroup from "./Components/ListGroup.jsx";
import CardWithButton from "./Components/CardWithButton.jsx";
import porto from "../../img/PortoOk.jpg";
import paris from "../../img/ParisOk.jpg";
import { AiFillStar } from "react-icons/ai";

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
			<div className="container">
				<div className="row">
					<CardWithButton
						bootstrapClass="col-12 col-md-3 col-lg-3 mb-3"
						imgSrc={porto}
						imgAlt="Porto"
						title="Porto"
						text="Porto is a fascinating city that has so much to offer you for your holiday. The city boasts an extensive history, captivating tourist attractions, buzzing nightlife, along with outstanding tourist facilities."
					/>
					<ListGroup
						title1="Hotel Carris"
						stars1={
							<div>
								<AiFillStar size="15px" />
								<AiFillStar size="15px" />
								<AiFillStar size="15px" />
								<AiFillStar size="15px" />
							</div>
						}
						text1="79€ per night"
						title2="Moov Hotel Porto"
						stars2={
							<div>
								<AiFillStar size="15px" />
								<AiFillStar size="15px" />
							</div>
						}
						text2="52€ per night"
						title3="Hotel International"
						stars3={
							<div>
								<AiFillStar size="15px" />
								<AiFillStar size="15px" />
								<AiFillStar size="15px" />
							</div>
						}
						text3="42€ per night"
					/>
					<CardWithButton
						bootstrapClass="col-12 col-md-3 col-lg-3 mb-3"
						imgSrc={paris}
						imgAlt="Paris"
						title="Paris"
						text="Bonjour Mon Ami! Paris needs no formal introduction - synonymous with culture, architecture, food and fashion. That je ne sais quoi of the French capital makes it the dream destination for many."
					/>
					<ListGroup
						title1="Petit Madeleine"
						stars1={
							<div>
								<AiFillStar size="15px" />
								<AiFillStar size="15px" />
								<AiFillStar size="15px" />
							</div>
						}
						text1="162€ per night"
						title2="The ReMIX Hotel"
						stars2={
							<div>
								<AiFillStar size="15px" />
								<AiFillStar size="15px" />
								<AiFillStar size="15px" />
								<AiFillStar size="15px" />
							</div>
						}
						text2="105€ per night"
						title3="Auteuil Tour Eiffel"
						stars3={
							<div>
								<AiFillStar size="15px" />
								<AiFillStar size="15px" />
								<AiFillStar size="15px" />
								<AiFillStar size="15px" />
							</div>
						}
						text3="164€ per night"
					/>
				</div>
			</div>
		</>
	);
};

export default Offers;
