import { useState } from "react";
import axios from "axios";
import Title from "../components/Title";
const Put = () => {
	const [id, setId] = useState(0);
	const [client, setClient] = useState("");
	const [url, setUrl] = useState("");
	const [auth, setAuth] = useState("");
	const [data, setData] = useState([]);
	const apiUrl = `http://localhost:8000/apis/customer/${id}/`;
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.put(
				apiUrl,
				{ client, url, auth },
				{
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer luis",
					},
				}
			);
			console.log(res);
			setData(res);
		} catch (error) {
			console.log(error);
			setData(error);
		}
	};
	return (
		<>
			<Title type="Put" />
			<section>
				<form
					className="form put"
					onSubmit={handleSubmit}
				>
					<div className="form-row">
						<label
							htmlFor="id"
							className="form-label"
						>
							Id
						</label>
						<input
							type="number"
							className="form-input"
							id="id"
							value={id}
							onChange={(e) => setId(e.target.value)}
							required
						/>
					</div>
					<div className="form-row">
						<label
							htmlFor="client"
							className="form-label"
						>
							Client
						</label>
						<input
							type="text"
							className="form-input"
							id="client"
							value={client}
							onChange={(e) => setClient(e.target.value)}
							required
						/>
					</div>
					<div className="form-row">
						<label
							htmlFor="clientUrl"
							className="form-label"
						>
							Url
						</label>
						<input
							type="url"
							className="form-input"
							id="url"
							value={url}
							onChange={(e) => setUrl(e.target.value)}
							required
						/>
					</div>
					<div className="form-row">
						<label
							htmlFor="auth"
							className="form-label"
						>
							Auth
						</label>
						<input
							type="text"
							className="form-input"
							id="auth"
							value={auth}
							onChange={(e) => setAuth(e.target.value)}
							required
						/>
					</div>
					<button
						type="submit"
						className="btn btn-block"
					>
						Editar
					</button>
				</form>
				<pre className={data.length == 0 ? "no-data" : null}>
					{data.length == 0
						? JSON.stringify({ client, url, auth }, null, 2)
						: JSON.stringify(
								{
									data: data.data,
									status: data.status,
									statusText: data.statusText,
									message: data.message,
									code: data.code,
								},
								null,
								2
						  )}
				</pre>
			</section>
		</>
	);
};
export default Put;
