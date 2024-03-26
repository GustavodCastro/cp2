<template>
    <div class="container">
        <img v-bind:src="urlImagem" alt="Banner">

    </div>


</template>


<script>
    export default {
        name: "ImagemComponent",
        data(){
            return {
                urlImagem : "https://shorturl.at/jxGTY"
        }
    }
}
</script>


<style scoped>
     img {
        width: 300px;
        height: auto;
        border: solid 4px darkcyan;
        margin: 16px;
        border-radius: 16px;
        box-shadow: 2px 2px 10px 2px darkcyan;

     }
</style>