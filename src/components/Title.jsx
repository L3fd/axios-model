const Title = ({ type }) => {
	return (
		<header>
			<div className="title">
				<h1>
					<span>Axios</span> {type}
				</h1>
			</div>
			<div className="subtitle"></div>
		</header>
	);
};

export default Title;
