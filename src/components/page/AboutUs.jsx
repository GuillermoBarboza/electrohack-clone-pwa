import React from "react";
import logoMongo from "../../logoMongo.svg";

const AboutUs = () => {
	return (
		<div className="container margin-aboutus">
			<h2 className="page-header">About Us</h2>
			<hr className="mb-4" />
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptate
				nihil eum consectetur similique? Consectetur, quod, incidunt, harum nisi
				dolores delectus reprehenderit voluptatem perferendis dicta dolorem non
				blanditiis ex fugiat.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, magni,
				aperiam vitae illum voluptatum aut sequi impedit non velit ab ea
				pariatur sint quidem corporis eveniet. Odit, temporibus reprehenderit
				dolorum!
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et,
				consequuntur, modi mollitia corporis ipsa voluptate corrupti eum ratione
				ex ea praesentium quibusdam? Aut, in eum facere corrupti necessitatibus
				perspiciatis quis?
			</p>

			<div className="technologies-wrapper">
				<ul className="d-flex lead list-unstyled justify-content-around">
					<li>
						<img src={logoMongo} alt="" />
					</li>
					<li>
						<i class="fab fa-2x fa-react"></i>
					</li>
					<li>
						<i class="fab fa-2x fa-node-js"></i>
					</li>
				</ul>
				<ul className="d-flex lead list-unstyled justify-content-around">
					<li>MongoDB</li>
					<li>React.js</li>
					<li>Node.js</li>
				</ul>
			</div>

			<h3 className="page-header mt-5">Our Team</h3>
			<hr className="mb-5" />

			<div className="card-deck card-deck-custom">
				<div className="card text-center shadow-about-us">
					<img className="card-img-top" src="" alt="Team" />
					<div className="card-body">
						<h4 className="card-title">Guillermo Barboza</h4>
						<p className="card-text">Developer</p>
						<ul className="list-inline">
							<li className="list-inline-item">
								<i className="fab fa-2x fa-github-square"></i>
							</li>
							<li className="list-inline-item">
								<i className="fab fa-2x fa-linkedin"></i>
							</li>
						</ul>
					</div>
				</div>
				<div className="card text-center shadow-about-us">
					<img className="card-img-top" src="" alt="Team" />
					<div className="card-body">
						<h4 className="card-title">Fernando Cuadro</h4>
						<p className="card-text">Developer</p>
						<ul className="list-inline">
							<li className="list-inline-item">
								<i className="fab fa-2x fa-github-square"></i>
							</li>
							<li className="list-inline-item">
								<i className="fab fa-2x fa-linkedin"></i>
							</li>
						</ul>
					</div>
				</div>
				<div className="card text-center shadow-about-us">
					<img className="card-img-top" src="" alt="Team" />
					<div className="card-body">
						<h4 className="card-title">María José Marra</h4>
						<p className="card-text">Developer</p>
						<ul className="list-inline">
							<li className="list-inline-item">
								<i className="fab fa-2x fa-github-square"></i>
							</li>
							<li className="list-inline-item">
								<i className="fab fa-2x fa-linkedin"></i>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
