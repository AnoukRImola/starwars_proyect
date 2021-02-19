import React, { Component } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Carddos = props => {
	return (
		<div className="card mx-4" style={{ width: "18rem" }}>
			<img src="https://www.universetoday.com/wp-content/uploads/2013/01/death-star.jpg" height="100%" />

			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					<strong>Name: &nbsp;</strong>
					{props.name}
					<br />
					<strong>Diameter: &nbsp;</strong>
					{props.diameter}
					<br />
					<strong>Rotation_period: &nbsp;</strong>
					{props.rotation_period}
					<br />
					<strong>Orbital_period: &nbsp;</strong>
					{props.orbital_period}
					<br />
					<strong>Population: &nbsp;</strong>
					{props.population}
				</p>
				<div className="d-flex justify-content-between">
					<Link to={`/vistaplaneta/${props.id}`}>
						<button type="button" className="btn btn-outline-danger">
							Learn More!
						</button>
					</Link>
					<button type="button" className="btn btn-outline-warning">
						{<i className="fas fa-heart" />}
					</button>
				</div>
			</div>
		</div>
	);
};
Carddos.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	diameter: PropTypes.number,
	rotation_period: PropTypes.number,
	orbital_period: PropTypes.number,
	population: PropTypes.number
};
