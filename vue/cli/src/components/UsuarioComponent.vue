<template>
    <div>
        <p>Nome: {{ nome }}</p>
        <p>E-mail: {{ email }}</p>
        <imagem-component/>
        
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
            email : "gustavo.castro@gmail.com"
        }
    }
}


</script>
