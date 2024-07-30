<template>
    <div>
        <h1>Pedidos</h1>
        <ListaPedidoComponent/> <!--Componente na página-->>
    </div>
</template>


<script> 
    import ListaPedidoComponent from '../components/ListaPedidoComponent.vue';
        export default {
            name: "PedidosView",
            components: {
                ListaPedidoComponent
        }
    }
</script>
