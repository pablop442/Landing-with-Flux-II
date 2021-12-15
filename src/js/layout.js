import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/Home.jsx";
import injectContext from "./store/appContext";
import About from "./views/About.jsx";
import Navbar from "./views/Components/Navbar/Navbar.jsx";
import Footer from "./views/Components/Footer.jsx";
import HeaderTop from "./views/Components/HeaderTop.jsx";
import Vacations from "./views/Vacations.jsx";
import Contact from "./views/Contact.jsx";
import Offers from "./views/Offers.jsx";
import AllInclusive from "./views/AllInclusive.jsx";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<HeaderTop />
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/vacations" component={Vacations} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/offers" component={Offers} />
						<Route exact path="/all-inclusive" component={AllInclusive} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
