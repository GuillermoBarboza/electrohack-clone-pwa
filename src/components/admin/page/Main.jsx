import React from "react";
import OrderChart from "../OrderChart";

const Main = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-6"></div>
				<div className="col-lg-6">
					<div className="chart-wrapper">
						<h5>Le Chart</h5>
						<OrderChart />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
