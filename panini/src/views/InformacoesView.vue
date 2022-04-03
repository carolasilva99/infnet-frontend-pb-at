<script setup>
import Header from "../components/Header.vue";
</script>

<template>
  <Header :isUserLoggedIn="false" active-route="Home"></Header>

  <MDBContainer>
    <MDBRow class="bg-light">
      <MDBCol class="tela-cadastro">
        <h1 class="h1-responsive font-weight-bold text-left">Panini</h1>
        <p>A melhor plataforma para receber pães de todos os tipos da sua casa! Faça seu cadastro e conheça mais sobre nós!</p>
        <h2 class="h2-responsive font-weight-bold text-left">Informações complementares</h2>
        <p>Estas informações serão utilizadas na personalização das cestas de pães e sugestões de produtos que a Panini poderá lhe fazer</p>
        <br />
        <h3 class="h2-responsive font-weight-bold text-left">Ingredientes preferidos</h3>
        <!-- <div v-for="ingrediente in ingredientes" :key="ingrediente.id"> -->
              <MDBCheckbox inline label="Farinha comum" v-model="checkbox1" />
              <MDBCheckbox inline label="Farinha integral" v-model="checkbox2" />
              <MDBCheckbox inline label="Farinha integral enriquecida" v-model="checkbox3" />
              <MDBCheckbox inline label="Farinha comum" v-model="checkbox3" />



<!-- <div id="app"> -->
          <!-- <blog-post v-for="ingrediente in ingredientes" :key="ingrediente.id"></blog-post> -->
        <!-- </div> -->
        <br />
        <MDBBtn color="secondary" @click="salvarCadastro()">
          Salvar informaões complementares
          <MDBIcon icon="chevron-right" />
        </MDBBtn>
        <MDBBtn color="secondary" @click="cancelarInformacoes()">
          Cancelar Informações
          <MDBIcon icon="chevron-right" />
        </MDBBtn>
      </MDBCol>
      <MDBCol class="landing-page-image-col d-none d-sm-block d-sm-none d-md-block">
        <img
          src="../assets/landing-page-image.jpg"
          alt="Imagem de padeiro"
          class="landing-page-image"
        />
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<style>
.landing-page-image {
  width: 95%;
  height: 95%;
}

.tela-cadastro {
  padding-top: 2%;
}

h1 {
  font-size: 4rem;
}
</style>

<script>

// const App = {
//     data() {
//     return {}

// }}
// const app = Vue.createApp(App)
// app.component(
//   'blog-post', {
//   props: ['title', 'text'],
//   template: `
//                   <MDBCheckbox label="$ingrediente.nome"
//           v-model="$ingrediente.caixa" />
// `
// })

import { MDBCol, MDBRow, MDBContainer, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-vue-ui-kit';
import { ref } from 'vue';

export default {
  data() {
    return {
      ingredientes: [
        { id: 1, caixa: "checkbox1", nome: "Farinha integral enriquecida" },
        { id: 2, caixa: "checkbox2", nome: "Farinha integral" },
        { id: 3, caixa: "checkbox3", nome: "Farinha normal" },
      ]
    }
  },
  components: {
    MDBCol,
    MDBRow,
    MDBContainer,
    MDBBtn,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  },
  setup() {
    // const nome = ref('');
    // const email = ref('');
    // const cep = ref(0);
    // const cidade = ref('');
    // const uf = ref('');
    // const logradouro = ref(0);
    // const numero = ref(0);
    // const complemento = ref('');
    // const bairro = ref('');
    const checkbox1 = ref(false);
    const checkbox2 = ref(false);
    const checkbox3 = ref(false);
    return {
      // nome,
      // email,
      // cep,
      // cidade,
      // uf,
      // logradouro,
      // numero,
      // complemento,
      // bairro,
      checkbox1,
      checkbox2,
      checkbox3
    };
  },
  methods: {
    cadastro() {
      this.$router.push({
        name: "cadastro",
      });
    },
    cancelarInformacoes() {
      this.$router.push({
        name: "home",
      });
    },
  },
};
</script>
