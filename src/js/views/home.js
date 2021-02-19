import React, { useState, useEffect, setState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "/workspace/react-hello-webapp/src/js/store/appContext.js";
import { Carduno } from "/workspace/react-hello-webapp/src/js/component/carduno.js";
import { Carddos } from "/workspace/react-hello-webapp/src/js/component/carddos.js";
import PropTypes from "prop-types";

export const Home = props => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.loadPeople();
		actions.loadPlanet();
	}, []);
	console.log(store.peoples);

	return (
		<div className="container">
			<div className="align-items-center text-center">
				<div style={{ overflow: "auto" }}>
					<div className="row">
						<div className="d-flex">
							{store.peoples.map((people, i) => {
								return (
									<div key={i}>
										<Carduno
											name={people.name}
											gender={people.gender}
											height={people.height}
											mass={people.mass}
											eye_color={people.eye_color}
											id={i}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
			<br />
			<br />
			<div className="align-items-center text-center">
				<div style={{ overflow: "auto" }}>
					<div className="row">
						<div className="d-flex">
							{store.planets.map((planet, i) => {
								return (
									<div key={i}>
										<Carddos
											name={planet.name}
											diameter={planet.diameter}
											rotation_period={planet.rotation_period}
											orbital_period={planet.orbital_period}
											population={planet.population}
											id={i}
										/>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
Home.propTypes = {
	data: PropTypes.any
};
