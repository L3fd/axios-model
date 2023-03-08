import { useState } from "react";
import axios from "axios";
import Title from "../components/Title";

const url = "http://localhost:8000/apis/customer/";

const Get = () => {
	const [data, setData] = useState([]);

	const fetchData = async () => {
		const response = await axios
			.get(url, {
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer luis",
				},
			})
			.then((response) => {
				console.log(response.data);
				setData(response.data);
			});
	};
	console.log(data);
	return (
		<>
			<Title type="Get" />
			<section className="section text-center">
				<button
					className="btn btn-primary"
					onClick={fetchData}
				>
					Buscar dados
				</button>
				<div className="res-container">
					{data.map((item) => (
						<div
							key={item.id}
							className="res"
						>
							<div className="res-data">
								<p>Client: </p>
								<p>{item.client}</p>
							</div>
							<div className="res-data">
								<p>Url: </p>
								<p>{item.url}</p>
							</div>
						</div>
					))}
				</div>
				{
					<pre className={data.length == 0 ? `no-data` : null}>
						{JSON.stringify(data, null, 2)}
					</pre>
				}
			</section>
		</>
	);
};
export default Get;
