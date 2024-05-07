<template>
	<div>
		<h1>Menu</h1>
		<div id="scroll-horizontal">
			<div id="card-content" v-for="burguer in listaMenuHamburguer" :key="burguer.id">
				<div id="card-linha">
					</div>
						<div id="foto-hamburguer">
							<img src="burguer.foto" alt="burguer.nome"/>
								<div class="card-coluna">
									<p id="nome-content">{{burguer.nome}}</p>
									<p id="preco-content"> R$ {{burguer.valor}},00</p>
									<p id="descricao-content">{{burgue.descricao}}</p>
									<buttom>Selecionar</buttom>
								</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>


<script>
	export default{
		name : "MenuView",
		data (){
			return {
				listaMenuHamburguer: []
			};
		},
		methods: {
			async consultaMenu() {
				const response = await fetch("https://tburguer.wiremockapi.cloud/menu");
				const dados = await response.json();
				this.listaMenuHamburguer = dados.burgues;
			}
		},
		mounted(){
			this.consultaMenu()
		}

	}
</script>

<style scoped>

#card-content{
	display: inline-block;
	width: 280px;
	min-height: 500px;
	margin: 20px;
	border: 1px solid #ddd;
	border-radius: 10px;
	overflow: hidden;
	box-shadow: 0 4px 8px #444;
	position: relative;
}

#scroll-horizontal{
	flex: 1;
	overflow-x: auto;
	white-space : nowrap;
	width: 600px;
	margin: 0 auto;
	box-shadow: inset -10px 0px 15px -20px gray;

}

.foto-hamburguer{
	flex-shrink: 0;
}

.foto-hamburguer img {
	width: 100%;
	max-height: 200px;
	object-fit: cover;
	border-radius: 10px 0 0 ;
}

#nome-content{
	font-size: 35px;
	font-weigth: bold;
	text-align: center;
	margin: 12px;
}

#preco-content{
	font-size: 35px;
	font-weigth bold;
	text-align: center;
	width: 100%;
	color: green;
}

#descricao-content{
	color: gray;
	margin-top: 16px;
	margin-bottom: 16px;
	white-space: pre-line;
	overflow: hidden;
	text-overflow: left;
	display: -webkit-box;
	-webkit-line-clamp: 6; /*numero de linha*/
	-webkit-box-orient: vertical;
}

.card-coluna{
	flex-grow: 1;
	padding: 15px;
	height: 100%;
}

.card-coluna p {
	margin: 0;
}

.card-linha{
	display: flex;
	flex-direction: row;
	height: 100%;
}

.card-coluna buttom {
	margin-top: auto;
	padding: 10px;
	background-color: green;
	color: #fff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 14px;
	font-weight: bold;
	transition: 0.5s;
	width:100%;
}


.card-coluna buttom:hover {
	background-color: transparent;
	color: rgb(6, 87, 85);
	border: solid 1px rgb(6, 87, 85);
	border: 5px;
};

</style>



