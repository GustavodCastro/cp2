
const meuAppVue = {

    //Primeiro Metodo

    data () {

        return{   
            nome : "Gustavo de Assis",
            idade : 25,
            inputText: ""

        }
    }

}

Vue.CreateApp(meuAppVue).mount('#app') // Cria o objeto Meu App, solicitando que monte a referencia apontada na #, neste caso a id = app.