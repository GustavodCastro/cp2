<template>
    <div>
        <h1>Titulo padrão</h1>
        <h2>Outro Titulo</h2>
        <p class="subtitulo">Subtitulo estiloso</p>

    </div>

</template>

<script>
    export default {
        name: "EstiloComponent"
    }

</script>


<style scoped>
    h1{
        color: pink;
    }
    h2{
        color: red;
    }
    .subtitulo {
        text-align: center;
        font-family: 'Gill Sans';
        color: blueviolet; 
    }


</style>