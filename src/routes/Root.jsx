import { Outlet, Link } from "react-router-dom";

export default function Root() {
	return (
		<>
			<div id="sidebar">
				<h1>Modelos de Requisições em Axios</h1>

				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/getCustomers">Requisição Get</Link>
						</li>
						<li>
							<Link to="/getSingleCustomer">Requisição Get Especifica</Link>
						</li>
						<li>
							<Link to="/postCustomer">Requisição Post</Link>
						</li>
						<li>
							<Link to="/editCustomer">Requisição Put</Link>
						</li>
						<li>
							<Link to="/deleteCustomer">Requisição Delete</Link>
						</li>
					</ul>
				</nav>
			</div>
			<div id="detail">
				<Outlet />
			</div>
		</>
	);
}
