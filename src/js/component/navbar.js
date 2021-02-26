import React from "react";
import { Link } from "react-router-dom";
import rigoImage from "../../img/sw.jpg";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<img src={rigoImage} height="80px" />
			</Link>

			<div className="btn-group" role="group">
				<button
					id="btnGroupDrop1"
					type="button"
					className="btn btn-primary dropdown-toggle"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favoritos
				</button>
				<div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
					<a className="dropdown-item" href="#">
						Dropdown link
					</a>
					<a className="dropdown-item" href="#">
						Dropdown link
					</a>
				</div>
			</div>
		</nav>
	);
};
