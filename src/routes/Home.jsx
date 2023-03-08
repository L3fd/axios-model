const Home = () => {
	return (
		<section className="home">
			<div className="title">
				<h1>
					Modelos do <span>Axios</span>
				</h1>
				<p>
					Esse projeto tem como objetivo mostrar os modelos de requisições que
					podem ser feitas com o Axios.
				</p>
				<p>
					Além desses modelos o Axios permite você configurar instâncias, para
					não precisar repetir os headers e configurar requests com padrões
					parecidos.
				</p>
				<p>
					{" "}
					<a
						href="https://axios-http.com/ptbr/docs/instance"
						target="_blank"
						rel="noreferrer"
					>
						Link para a documentação das Instâncias
					</a>
				</p>
				<p>
					Todos os requests aqui estão configurados para o padrão da API do
					portal no docker, então sintam-se a vontade para mockar elas ou seguir
					o padrão de consumo delas.
				</p>
			</div>
		</section>
	);
};

export default Home;
