import React from "react";
import PropTypes from "prop-types";
import "./ComponentCover.scss";

const ComponentCover = props => {
	return (
		<div className="container my-3">
			<div className="card text-white">
				<img src={props.imgSrc} className="card-img" alt={props.imgAlt} />
				<div className="card-img-overlay">
					<h5 className="card-title coverTitle">{props.title}</h5>
					<p className="card-text text-primary coverText">{props.text1}</p>
					<p className="card-text text-primary coverText">{props.text2}</p>
				</div>
			</div>
		</div>
	);
};

ComponentCover.propTypes = {
	imgSrc: PropTypes.string,
	imgAlt: PropTypes.string,
	title: PropTypes.string,
	text1: PropTypes.string,
	text2: PropTypes.string
};

export default ComponentCover;
