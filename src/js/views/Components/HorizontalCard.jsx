import React from "react";
import PropTypes from "prop-types";

const HorizontalCard = props => {
    return (
        <div className="card mb-3" style="max-width: 540px;">
            <div className="row g-0">
                <div class="col-md-4">
                    <img src={props.imgSrc} className="img-fluid rounded-start" alt={props.imgAlt}/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text1}</p>
                        <p className="card-text"><small class="text-muted">{props.text1}</small></p>
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