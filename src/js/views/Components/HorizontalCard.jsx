import React from "react";
import PropTypes from "prop-types";
import { ImAirplane } from "react-icons/im";
import { RiShipFill, RiHotelBedFill } from "react-icons/ri";
import { IoTicket } from "react-icons/io5";

const HorizontalCard = props => {
	return (
		<div className="container d-flex justify-content-center">
			<div className="col-md-9 card mb-3">
				<div className="row">
					<div className="col-md-4">
						<img src={props.imgSrc} className="img-fluid rounded-start" alt={props.imgAlt} />
					</div>
					<div className="col-md-4 d-flex align-items-center">
						<div className="card-body">
							<h5 className="card-title">{props.title}</h5>
							<p className="card-text">
								<small className="text-muted">{props.text1}</small>
							</p>
							<p className="card-text">{props.text2}</p>
						</div>
					</div>
					<div className="col-md-4 d-flex align-items-center">
						<div className="card-body">
							<div className="row">
								<div className="col-md-6">
									<ImAirplane
										size="5vw"
										className="my-4 ms-4 me-2 border border-2 border-primary bg-primary text-white p-3 rounded"
									/>
								</div>
								<div className="col-md-6">
									<RiShipFill
										size="5vw"
										className="my-4 ms-2 me-4 border border-2 border-primary bg-primary text-white p-3 rounded"
									/>
								</div>
							</div>
							<div className="row">
								<div className="col-md-6">
									<RiHotelBedFill
										size="5vw"
										className="my-4 ms-4 me-2 border border-2 border-primary bg-primary text-white p-3 rounded"
									/>
								</div>
								<div className="col-md-6">
									<IoTicket
										size="5vw"
										className="my-4 ms-2 me-4 border border-2 border-primary bg-primary text-white p-3 rounded"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

HorizontalCard.propTypes = {
	imgSrc: PropTypes.string,
	imgAlt: PropTypes.string,
	title: PropTypes.string,
	text1: PropTypes.string,
	text2: PropTypes.string
};

export default HorizontalCard;
