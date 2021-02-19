import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/sw.jpg";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<img src={rigoImage} height="80px" />
			</Link>
			<div className="btn-group">
				<Link to="/demo">
					<button
						type="button"
						className="btn btn-primary dropdown-toggle"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favoritos
					</button>
				</Link>
			</div>
		</nav>
	);
};
