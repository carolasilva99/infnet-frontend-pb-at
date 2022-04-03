import "mdb-vue-ui-kit/css/mdb.min.css";
import { createApp } from "vue";
import { createStore} from 'vuex';
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const dados = createStore({
    state:{
        ultimoId: 0,
        flagInclui: false,
        flagAltera: false,
        flagExclui: false,
        cadastroPessoas: [],
        cadastroPessoa: null
    },
    getters:{
        cadastroPessoas: (state) => state.cadastroPessoas,
        cadastroPessoa: (state) => state.cadastroPessoa,
        flagInclui: (state) => {return state.flagInclui},
        flagAltera: (state) => {return state.flagAltera},
        flagExclui: (state) => {return state.flagExclui},
        ultimoId: (state) => {return state.ultimoId},
    },
    mutations:{
        incluirPessoa: (state, pessoa) => {
            state.cadastroPessoas.push(pessoa)
        },
        alterarPessoa: (state, pessoa) => {
            const index = state.cadastroPessoas.findIndex(l => l.id === pessoa.id);
            state.cadastroPessoas.splice(index, 1, pessoa);
        },
        excluirPessoa: (state, id) => {
            state.cadastroPessoas.splice(id, 1);
        },
        buscarPessoa: (state, id) => {
            console.log("buscar acessorio"+state.cadastroPessoas[id])
            // const index = state.cadastroPessoas.findIndex(l => l.id === id);
            state.cadastroPessoa = state.cadastroPessoas[id];
        },
        incrementarId: (state) => {
            state.ultimoId++
        },
        setFlagInclui: (state, flag) => {
            return state.flagInclui = flag
        },
        setFlagAltera: (state, flag) => {
            return state.flagAltera = flag
        },
    },
    actions:{
        async incluirPessoa(context, pessoa){
            context.commit('incluirPessoa', pessoa);
        },
        async alterarPessoa(context, pessoa){
            context.commit('alterarPessoa', pessoa);
        },
        async excluirPessoa(context, id){
            context.commit('excluirPessoa', id);
        },
        async buscarPessoa(context, id){
            context.commit('buscarPessoa', id);
        },
        async setFlagInclui(context, flag){
            context.commit('setFlagInclui', flag);
        },
        async incrementarId(context){
            context.commit("incrementarId");
        },
    },
})


app.use(router);
app.use(dados);

app.mount("#app");
