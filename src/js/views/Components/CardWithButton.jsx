import React from "react";
import PropTypes from "prop-types";

const CardWithButton = props => {
	return (
		<div className={props.bootstrapClass}>
			<div className="card">
				<img src={props.imgSrc} className="card-img-top" alt={props.imgAlt} />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.text}</p>
					<div className=" d-flex justify-content-end">
						<button href="#" className="btn btn-primary">
							Book Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

CardWithButton.propTypes = {
	bootstrapClass: PropTypes.string,
	imgSrc: PropTypes.string,
	imgAlt: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string
};

export default CardWithButton;
