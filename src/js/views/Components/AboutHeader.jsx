import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AboutHeader = props => {
	const linkStyle = {
		textDecoration: "none"
	};
	return (
		<>
			<div className="container py-5" style={{ backgroundColor: "#001427" }}>
				<div className="container px-5">
					<div className="row gx-5 justify-content-center">
						<div className="col-lg-6 text-center">
							<h1 className="text-center my-5 display-5 fw-bolder text-white mb-2">{props.title}</h1>
							<p className="lead text-white-50 mb-4 text-center">{props.paragraph}</p>
							<button type="button" className="btn btn-primary btn-lg px-4 ">
								<Link className="text-white" to="/contact" style={linkStyle}>
									Contact us
								</Link>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default AboutHeader;
AboutHeader.propTypes = {
	title: PropTypes.string,
	paragraph: PropTypes.string
};
