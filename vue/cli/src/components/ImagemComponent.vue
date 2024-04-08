<template>
    <div class="container">
    <p>Nome da Imagem: {{ nomeImagem }}</p>
    <img v-show="ImagemVisivel":src="urlImagem" alt="Banner">
    <button @click="apareceEsconde(), segundoMetodo()">Aparece/Esconde</button>
    </div>


</template>


<script>
    export default {
        name: "ImagemComponent",
        data(){
            return {
                ImagemVisivel : false,
                //urlImagem : "https://shorturl.at/jxGTY"
        }
    },
    methods:{
        apareceEsconde(){
            console.log("Fui clicado!!");
            this.ImagemVisivel = !this.ImagemVisivel;
            this.$emit('visivelImg', this.ImagemVisivel); 

        },
        segundoMetodo(){
            setTimeout(function(){
                console.log("Segundo método chamado");
            }, 2000);
        }
    },props:{
        nomeImagem: String,
        urlImagem : String,
    },
    emits: ["visivelImg"],
}
</script>


<style scoped>
    button{
        padding: 12px;
        font-weight: bold;
        color:green;
        background-color: azure;
        border: solid 2px grey;
        border-radius: 8px;
        transition: 0.5s;
        cursor: pointer;
    }

    button:hover{
        background-color: darkcyan;
        color: aliceblue;
    }

     img {
        width: 300px;
        height: auto;
        border: solid 4px darkcyan;
        margin: 16px;
        border-radius: 16px;
        box-shadow: 2px 2px 10px 2px darkcyan;

     }
</style>