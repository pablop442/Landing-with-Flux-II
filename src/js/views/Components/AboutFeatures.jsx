import React from "react";
import { BsGeoAltFill, BsPiggyBankFill, BsSunglasses } from "react-icons/bs";

const AboutFeatures = () => {
	const iconStyles = {
		marginLeft: "3px",
		marginRight: "3px",
		fontSize: "25px"
	};
	return (
		<>
			<div className="features py-5 border-bottom">
				<div className="container px-5 my-5">
					<div className="row gx-5">
						<div className="col-lg-4 mb-5 mb-lg-0">
							<span className="feature bg-primary bg-gradient text-white rounded-3 mb-3 p-3">
								<BsGeoAltFill style={iconStyles} />
							</span>
							<h2 className="h4 fw-bolder mt-4">Guidance</h2>
							<h5>Expert insight and travel knowledge</h5>
							<p>
								Travel has become more complicated, but we are here to guide you through it. Our expert
								consultants know where you can travel and use their wealth of knowledge to help you make
								the best decisions for your trip.
							</p>
						</div>
						<div className="col-lg-4 mb-5 mb-lg-0">
							<span className="feature bg-primary bg-gradient text-white rounded-3 mb-3 p-3">
								<BsPiggyBankFill style={iconStyles} />
							</span>
							<h2 className="h4 fw-bolder mt-4">Value</h2>
							<h5>Irresistible rates, offers and benefits</h5>
							<p>
								We know travel. 4Geeks Travel takes pride in our selection of partners, and the rates
								and benefits that curated for our customers. We always have a fresh offering of deals
								that are irresistible.
							</p>
						</div>
						<div className="col-lg-4 mb-5 mb-lg-0">
							<span className="feature bg-primary bg-gradient text-white rounded-3 mb-3 p-3">
								<BsSunglasses style={iconStyles} />
							</span>
							<h2 className="h4 fw-bolder mt-4">Peace of mind</h2>
							<h5>Reassurance to book with confidence</h5>
							<p>
								We know the unexpected happens and plans change. 4Geeks Travel works with our partners
								to advocate on your behalf. Part of this means all refund and change policies are
								clearly communicated.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default AboutFeatures;
