import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Carduno = props => {
	const id = props.id;
	const { store, actions } = useContext(Context);

	return (
		<div className="card mx-4" style={{ width: "18rem" }}>
			<img
				src="https://www.cinemascomics.com/wp-content/uploads/2021/02/Star-Wars-revela-una-realidad-alternativa-de-Darth-Vader-960x720.jpg.webp"
				height="100%"
			/>

			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					<strong>Name: &nbsp;</strong>
					{props.name}
					<br />
					<strong>Gender: &nbsp;</strong>
					{props.gender}
					<br />
					<strong>Height: &nbsp;</strong>
					{props.height}
					<br />
					<strong>Mass: &nbsp;</strong>
					{props.mass}
					<br />
					<strong>Eye_color: &nbsp;</strong>
					{props.eye_color}
				</p>
				<div className="d-flex justify-content-between">
					<Link to={`/vistapersonajes/${props.id}`}>
						<button type="button" className="btn btn-outline-danger">
							Learn More!
						</button>
					</Link>

					<Link onClick={() => actions.addFavorite(props.name, "persona")}>
						<button type="button" className="btn btn-outline-warning">
							{<i className="fas fa-heart" />}
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

//Validando props
Carduno.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	gender: PropTypes.string,
	height: PropTypes.number,
	mass: PropTypes.number,
	eye_color: PropTypes.string
};
