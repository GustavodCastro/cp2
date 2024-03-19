<template>
    <div>
        <footer id="footer">
            <p>Bem Vindo: {{ nome }} Olá mundo do Vue com CLI</p>
            <CadastroComponent/>
            <hr>
            <CadastroComponent/>
            <hr>
        </footer>
    </div>
</template>

<script>

    import CadastroComponent from './CadastroComponent'


    export default {
        name : "HomeComponent",
        data (){
            return {
                nome : "Gustavo"
            }
        },
        components:{
            CadastroComponent
        }
    }



</script>