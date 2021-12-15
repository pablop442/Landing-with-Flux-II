import React from "react";
import ComponentCover from "./Components/ComponentCover/ComponentCover.jsx";
import offersCover from "../../img/OffersCover.jpg";
import CardWithButton from "./Components/CardWithButton.jsx";
import mscFantasia from "../../img/MSCFantasia.jpg";
import mscMagnifica from "../../img/MSCMagnifica.jpg";
import norwegianDawn from "../../img/NorwegianDawn.jpg";
import norwegianEpic from "../../img/NorwegianEpic.jpg";
import norwegianJade from "../../img/NorwegianJade.jpg";
import voyagerOfTheSeas from "../../img/VoyagerOfTheSeas.jpg";

const AllInclusive = () => {
	return (
		<>
			<ComponentCover
				imgSrc={offersCover}
				imgAlt="All Inclusive Cover"
				title="All Inclusive"
				text1="Don't worry about anything."
				text2="Just relax and enjoy!"
			/>
			<div className="container">
				<div className="row">
					<CardWithButton
						bootstrapClass="col-12 col-md-6 col-lg-4 mb-3"
						imgSrc={mscFantasia}
						imgAlt="MSC Fantasia"
						title="Mediterranean: Bari, Trieste and Ancona"
						text="7 Nights - MSC Fantasia"
					/>
					<CardWithButton
						bootstrapClass="col-12 col-md-6 col-lg-4 mb-3"
						imgSrc={mscMagnifica}
						imgAlt="MSC Magnifica"
						title="Germany, UK, France and Netherlands"
						text="7 Nights - MSC Magnifica"
					/>
					<CardWithButton
						bootstrapClass="col-12 col-md-6 col-lg-4 mb-3"
						imgSrc={norwegianDawn}
						imgAlt="Norwegian Dawn"
						title="Denmark, Finland, Poland and Russia"
						text="9 Nights - Norwegian Dawn"
					/>
					<CardWithButton
						bootstrapClass="col-12 col-md-6 col-lg-4 mb-3"
						imgSrc={norwegianEpic}
						imgAlt="Norwegian Epic"
						title="Mediterranean: Italy and France"
						text="6 Nights - Norwegian Epic"
					/>
					<CardWithButton
						bootstrapClass="col-12 col-md-6 col-lg-4 mb-3"
						imgSrc={norwegianJade}
						imgAlt="Norwegian Jade"
						title="Mediterranean: Turkey, Israel and Cyprus"
						text="7 Nights - Norwegian Jade"
					/>
					<CardWithButton
						bootstrapClass="col-12 col-md-6 col-lg-4 mb-3"
						imgSrc={voyagerOfTheSeas}
						imgAlt="Voyager Of The Seas"
						title="Sweden, Estonia, Russia and Finland"
						text="10 Nights - Voyager Of The Seas"
					/>
				</div>
			</div>
		</>
	);
};

export default AllInclusive;
