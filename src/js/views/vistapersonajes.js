import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Vistapersonajes = props => {
	var parametros = useParams();
	const { store, actions } = useContext(Context);
	console.log(parametros);
	var detalles = store.peoples[parametros.theid];
	console.log(detalles);

	return (
		<div>
			<div className="jumbotron">
				<div className="container" align="center">
					<img
						src="https://elcorso.es/wp-content/uploads/2017/12/Cartel-en-horizontal-para-recurso-960x540.jpg"
						height="400px"
					/>
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
			</div>
		</div>
	);
};
