import { useState } from "react";
import axios from "axios";
import Title from "../components/Title";
const GetSingle = () => {
	const [id, setId] = useState(0);
	const [data, setData] = useState([]);
	const apiUrl = `http://localhost:8000/apis/customer/${id}/`;
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.get(apiUrl, {
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer luis",
				},
			});
			console.log(res);
			setData(res);
		} catch (error) {
			console.log(error);
			setData(error);
		}
	};
	return (
		<>
			<Title type="Get" />
			<section>
				<form
					className="form"
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
					<button
						type="submit"
						className="btn btn-block"
					>
						Buscar
					</button>
				</form>
				<pre className={data.length == 0 ? "no-data" : null}>
					{data.length == 0
						? JSON.stringify(data, null, 2)
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
export default GetSingle;
