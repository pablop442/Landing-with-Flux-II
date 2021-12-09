import React from "react";
import PropTypes from "prop-types";
import AboutHeader from "./Components/AboutHeader.jsx";
import AboutFeatures from "./Components/AboutFeatures.jsx";

const About = () => {
	return (
		<div>
			<AboutHeader
				title="4Geeks Travel"
				paragraph="To ensure your next vacation is as priceless as your last, we are committed to offering you guidance, value and peace of mind."
			/>
			<AboutFeatures />
		</div>
	);
};

export default About;
