import React from "react";
import PropTypes from "prop-types";

const CardWithButton = props => {
	return (
		<div className="col-12 col-md-3 col-lg-3 mb-3">
			<div className="card">
				<img src={props.imgSrc} className="card-img-top" alt={props.imgAlt} />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.text}</p>
					<a href="#" className="btn btn-primary">
						Book Now
					</a>
				</div>
			</div>
		</div>
	);
};

CardWithButton.propTypes = {
	imgSrc: PropTypes.string,
	imgAlt: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string
};

export default CardWithButton;
