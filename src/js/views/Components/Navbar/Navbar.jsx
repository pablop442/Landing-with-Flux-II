//Import React
import React from "react";
import { Link } from "react-router-dom";

//Import Style
import "./Navbar.scss";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarTogglerDemo01"
					aria-controls="navbarTogglerDemo01"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link active" to="/about">
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link active" to="/vacations">
								Vacations
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link active" to="/offers">
								Offers
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link active" to="/all-inclusive">
								All inclusive
							</Link>
						</li>
					</ul>
					<form className="d-flex">
						<input
							className="form-control me-2"
							type="search"
							placeholder="Flights, hotels, more..."
							aria-label="Search"
						/>
						<button className="btn btn-info text-nowrap" type="submit">
							<Link to="/contact">Take me</Link>
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
