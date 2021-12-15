import React from "react";
import { AiFillStar } from "react-icons/ai";
import PropTypes from "prop-types";
import propTypes from "prop-types";

const ListGroup = props => {
	return (
		<div className="col-12 col-md-3 col-lg-3 mb-3">
			<div className="card h-100">
				<div className="card-header fs-4">Featured</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<h5>{props.title1}</h5>
						<p className="text-warning">{props.stars1}</p>
						<p>{props.text1}</p>
					</li>
					<li className="list-group-item">
						<h5>{props.title2}</h5>
						<p className="text-warning">{props.stars2}</p>
						<p>{props.text2}</p>
					</li>
					<li className="list-group-item">
						<h5>{props.title3}</h5>
						<p className="text-warning">{props.stars3}</p>
						<p>{props.text3}</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

ListGroup.propTypes = {
	title1: PropTypes.string,
	title2: PropTypes.string,
	title3: PropTypes.string,
	stars1: PropTypes.string,
	stars2: PropTypes.string,
	stars3: PropTypes.string,
	text1: PropTypes.string,
	text2: PropTypes.string,
	text3: PropTypes.string
};

export default ListGroup;
