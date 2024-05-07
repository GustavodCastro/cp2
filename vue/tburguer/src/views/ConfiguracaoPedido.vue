<template>
	<div>
		<h1>Configurar Pedido</h1>
		<pedido-Component/>
	</div>
</template>


<script>
	export default{
		name: "ConfiguracaoPedidoView",
		data() {
			return {
				hamburguerSelecionado : null,
			};
		},
		components: { PedidoComponent },
		mouted() {
			console.log(this.$router.query.burguer);
		}
	}

</script>


<style scoped>

</style>