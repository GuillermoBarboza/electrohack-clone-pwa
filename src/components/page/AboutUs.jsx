import React from "react";

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
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				<ul className="d-flex lead list-unstyled justify-content-around">
					<li>React</li>
					<li>Redux</li>
					<li>Node.js</li>
					<li>Express</li>
					<li>MongoDB</li>
				</ul>
			</div>

			<h3 className="page-header mt-5">Our Team</h3>
			<hr className="mb-5" />

			<div className="card-deck">
				<div className="card text-center">
					<img className="card-img-top" src="" alt="Team" />
					<div className="card-body">
						<h3 className="card-title">Juan Pérez</h3>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
							saepe et quisquam nesciunt maxime. This content is a little bit
							longer.
						</p>
						<ul className="list-inline">
							<li className="list-inline-item">
								<i className="fab fa-2x fa-facebook-square"></i>
							</li>
							<li className="list-inline-item">
								<i className="fab fa-2x fa-linkedin"></i>
							</li>
							<li className="list-inline-item">
								<i className="fab fa-2x fa-twitter-square"></i>
							</li>
						</ul>
					</div>
				</div>
				<div className="card text-center">
					<img
						className="card-img-top"
						src="img/about_us/cofounder_2.jpg"
						alt="Team"
					/>
					<div className="card-body">
						<h3 className="card-title">María Rodríguez</h3>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
							saepe et quisquam nesciunt maxime.
						</p>
						<ul className="list-inline">
							<li className="list-inline-item">
								<i className="fab fa-2x fa-facebook-square"></i>
							</li>
							<li className="list-inline-item">
								<i className="fab fa-2x fa-linkedin"></i>
							</li>
							<li className="list-inline-item">
								<i className="fab fa-2x fa-twitter-square"></i>
							</li>
						</ul>
					</div>
				</div>
				<div className="card text-center">
					<img
						className="card-img-top"
						src="img/about_us/cofounder_3.jpg"
						alt="Team"
					/>
					<div className="card-body">
						<h3 className="card-title">Juan Gómez</h3>
						<p className="card-text">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
							saepe et quisquam nesciunt maxime. This card has even longer
							content than the first to show that equal height action.
						</p>
						<ul className="list-inline">
							<li className="list-inline-item">
								<i className="fab fa-2x fa-facebook-square"></i>
							</li>
							<li className="list-inline-item">
								<i className="fab fa-2x fa-linkedin"></i>
							</li>
							<li className="list-inline-item">
								<i className="fab fa-2x fa-twitter-square"></i>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
