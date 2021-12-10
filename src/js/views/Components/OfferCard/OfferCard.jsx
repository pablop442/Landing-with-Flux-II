import React from "react";
import PropTypes from "prop-types";
import "./OfferCard.scss";
import { FcLike } from "react-icons/fc";
import BrooklynBridge from "../../../../img/BrooklynBridge.jpg";
import { Link } from "react-router-dom";

const OfferCard = props => {
	return (
		<div className="container">
			<div className="card mb-5" id="blog-card">
				<div className="row g-0">
					<div className="col-md-4">
						<img src={BrooklynBridge} className="img-fluid rounded-start" alt="Brooklyn Bridge NYC" />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h2 className="card-title">Special Sale!</h2>
							<h5 className="card-title">
								We <FcLike size="35px" /> <b>New York</b>{" "}
							</h5>
							<p className="card-text">
								It’s a time like no other in New York City, with something new (or renewed) at every
								turn—don’t you want to say you were there?
							</p>
							<button
								type="button"
								className="btn btn-info"
								data-bs-toggle="modal"
								data-bs-target="#exampleModal"
								data-bs-whatever="@mdo">
								<Link to="/contact">Contact us for more details</Link>
							</button>
							<div
								className="modal fade"
								id="exampleModal"
								tabIndex="-1"
								aria-labelledby="exampleModalLabel"
								aria-hidden="true">
								<div className="modal-dialog">
									<div className="modal-content">
										<div className="modal-header">
											<h5 className="modal-title" id="exampleModalLabel">
												Leave us your contact information
											</h5>
											<button
												type="button"
												className="btn-close"
												data-bs-dismiss="modal"
												aria-label="Close"
											/>
										</div>
										<div className="modal-body">
											<form>
												<div className="mb-3">
													<label htmlFor="recipient-name" className="col-form-label">
														Name and last name:
													</label>
													<input type="text" className="form-control" id="recipient-name" />
												</div>
												<div className="mb-3">
													<label htmlFor="recipient-name" className="col-form-label">
														Email:
													</label>
													<input type="text" className="form-control" id="recipient-name" />
												</div>
											</form>
										</div>
										<div className="modal-footer">
											<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
												Close
											</button>
											<button type="button" className="btn btn-primary">
												Submit
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

OfferCard.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string
};
export default OfferCard;
