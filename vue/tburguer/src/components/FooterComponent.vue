<template>
    <div>
        <footer id="footer">
            <p>
            <a href="https://github.com/GustavodCastro" target="_blank">Desenvolvido por Gustavo de Castro &copy; 2024</a>
            </p>
        <a url=""></a>
        </footer>
    </div>

</template>

<script>
    export default{
        name:"FooterComponent"
    }
</script>

<style scoped>
    #footer{
        height: 80px;
        background-color: #222;
        color: goldenrod;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #footer p {
        font-size: 14px;
    }

    a {
    color: goldenrod;
    }

    a:visited {
     color: silver;
    }

    a:hover {
    color: darkgoldenrod;
    }

    a:active {
    color: goldenrod;
    }


</style>