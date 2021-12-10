import React from "react";

const ContactForm = () => {
	return (
		<>
			<div className="container py-5" style={{ backgroundColor: "#001427" }}>
				<div className="row gx-5 justify-content-center">
					<div className="col-lg-6 text-center">
						<h1 className="text-center my-5 display-5 fw-bolder text-white mb-2">Contact us</h1>
						<p className="lead text-white-50 mb-4 text-center">
							We will be happy to help you, please leave your contact information and we will get in touch
						</p>
					</div>
				</div>
				<form className="mx-3 p-3 border border-info border-3 rounded shadow">
					<div className="row">
						<div className="col">
							<input
								type="text"
								className="form-control"
								placeholder="First name"
								aria-label="First name"
							/>
						</div>
						<div className="col">
							<input
								type="text"
								className="form-control"
								placeholder="Last name"
								aria-label="Last name"
							/>
						</div>
					</div>
					<div className="row my-3">
						<div className="col-sm-10">
							<input
								type="text"
								className="form-control"
								id="inputEmail3"
								placeholder="Phone"
								aria-label="Phone"
							/>
						</div>
					</div>
					<div className="row mb-3">
						<div className="col-sm-10">
							<input
								type="email"
								className="form-control"
								id="inputEmail3"
								placeholder="Email"
								aria-label="Email"
							/>
						</div>
					</div>
					<div className="row mb-3">
						<div className="col-sm-10">
							<input
								type="password"
								className="form-control"
								id="inputPassword3"
								placeholder="Password"
								aria-label="Password"
							/>
						</div>
					</div>
					<div className="row my-3">
						<div className="col-sm-10">
							<label className="visually-hidden" htmlFor="inlineFormSelectPref">
								Preference
							</label>
							<select className="form-select" id="inlineFormSelectPref">
								<option selected>Interested in...</option>
								<option value="1">Vacations packages</option>
								<option value="2">Offers</option>
								<option value="3">All inclusive packages</option>
							</select>
						</div>
					</div>
					<fieldset className="row mb-3">
						<legend className="col-form-label col-sm-2 pt-0 text-white">Contact form</legend>
						<div className="col-sm-10">
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="gridRadios"
									id="gridRadios1"
									value="option1"
									checked
								/>
								<label className="form-check-label text-white" htmlFor="gridRadios1">
									Email
								</label>
							</div>
							<div className="form-check">
								<input
									className="form-check-input"
									type="radio"
									name="gridRadios"
									id="gridRadios2"
									value="option2"
								/>
								<label className="form-check-label text-white" htmlFor="gridRadios2">
									Phone
								</label>
							</div>
						</div>
					</fieldset>
					<button type="submit" className="btn btn-primary">
						Register
					</button>
				</form>
			</div>
		</>
	);
};

export default ContactForm;
