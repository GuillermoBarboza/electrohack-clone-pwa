import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import globalUrl from "../../../utils/url";
import OrderChart from "../OrderChart";

const Main = () => {
	const token = useSelector((store) => store.user.token);
	const [orders, setOrders] = useState(null);

	useEffect(() => {
		axios({
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			url: `${globalUrl}/api/v1/orders`,
		}).then((res) => {
			setOrders(res.data);
		});
	}, []);

	return (
		<div className="container-fluid">
			<div className="admin-wrapper">
				<div className="chart-wrapper bg-light shadow">
					<h5>Monthly Sales</h5>
					<OrderChart />
				</div>
				<div className="table-responsive">
					<table className="table table-hover table-bordered mt-4">
						<thead className="bg-table-head">
							<tr className="text-center">
								<th scope="col">Buyer name</th>
								<th scope="col">Items Qty</th>
								<th scope="col">State</th>
								<th scope="col">Total</th>
							</tr>
						</thead>
						<tbody>
							{orders &&
								orders.map((order) => {
									return (
										<tr>
											<td>{order.buyer.name}</td>
											<td className="text-center">{order.products.length}</td>
											<td className="text-center">{order.state}</td>
											<td className="text-center">${order.total}</td>
										</tr>
									);
								})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Main;
