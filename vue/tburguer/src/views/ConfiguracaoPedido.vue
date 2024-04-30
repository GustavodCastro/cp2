<template>
	<div>
		<h1>Pedido Selecionado</h1>
	</div>
</template>


<script>
	export default{
		data() {
			return {
				hamburguerSelecionado : null,
			};
		},
		mouted() {
			console.log(this.$router.query.burguer);
		}
	}

</script>


<style scoped>

</style>