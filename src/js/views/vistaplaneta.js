import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vistaplaneta = props => {
	var parametros = useParams();
	const { store, actions } = useContext(Context);
	console.log(parametros);
	var detalles = store.planets[parametros.theid];
	console.log(detalles);

	return (
		<div>
			<div className="jumbotron">
				<div className="container" align="center">
					<img src="https://s1.1zoom.me/big7/915/Star_Wars_The_Force_502760.jpg" height="400px" />
					<br />
					<br />
					<h1>
						<strong>{detalles.name}</strong>
					</h1>
					<br />
					<p className="lead">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
				<hr className="my-4" />
				<div className="row mb-4">
					<div className="col-md-2">
						<h5 className="text-center">Diameter</h5>
						<p className="text-center">{detalles.diameter}</p>
					</div>
					<div className="col-md-2">
						<h5 className="text-center">Rotation_period</h5>
						<p className="text-center">{detalles.rotation_period}</p>
					</div>
					<div className="col-md-2">
						<h5 className="text-center">Orbital_period</h5>
						<p className="text-center">{detalles.orbital_period}</p>
					</div>
					<div className="col-md-2">
						<h5 className="text-center">Population</h5>
						<p className="text-center">{detalles.population}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
