import React from "react";
import PropTypes from "prop-types";

const BlogCard = props => {
	return (
		<>
			<div className="col-lg-4 mb-5 mb-lg-0 mt-4">
				<div className="card mb-3">
					<img src={props.image} className="card-img-top" alt={props.alt} />
					<div className="card-body">
						<h5 className="card-title">{props.title} </h5>
						<p className="card-text">{props.text}</p>
						<p className="card-text">
							<small className="text-muted">{props.updatedDate}</small>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default BlogCard;

BlogCard.propTypes = {
	image: PropTypes.string,
	alt: PropTypes.string,
	text: PropTypes.string,
	title: PropTypes.string,
	updatedDate: PropTypes.string
};
