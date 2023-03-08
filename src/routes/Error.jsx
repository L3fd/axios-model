import { Link } from "react-router-dom";
export default function ErrorPage() {
	return (
		<div id="error-page">
			<h1>Oops!</h1>
			<p>Perdão, não conseguimos achar essa página.</p>
			<Link to="/">Voltar para a página inicial</Link>
		</div>
	);
}
