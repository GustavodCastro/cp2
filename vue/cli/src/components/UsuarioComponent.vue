<template>
    <div>
        <p>Nome: {{ nome }}</p>
        <p>E-mail: {{ email }}</p>
        <imagem-component 
        @visivel-img="exibirMsgZ"
        nomeImagem="Imagem Ziraldo" 
        url-imagem="https://static.sambafoot.com/wp/sites/2/GKgWuuTWcAAnUW4.jpeg"/>

        <h1 v-show="isTimao">Timão é campeão!</h1>
        
        <imagem-component
        nome-imagem="Timão"
        url-imagem="https://s3.static.brasilescola.uol.com.br/be/2023/09/1-escudo-do-corinthians.jpg"/>
        
    </div>   
    
   
    </template>

<script>

import ImagemComponent from './ImagemComponent.vue'

export default {
    name: "UsuarioComponent",
    components:{
        ImagemComponent
    },
    data(){
        return {
            nome : "Gustavo",
            email : "gustavo.castro@gmail.com",
            isTimao : false
        }
    },
    methods:{
        exibirMsgZ(isImagemVisivel){
            if(isImagemVisivel == true){
                this.isTimao = true;
            }else{
                this.isTimao = false;
            }
        }
    }
}


</script>
