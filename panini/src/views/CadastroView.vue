<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
</script>

<template>
  <HeaderComponent :isUserLoggedIn="false" active-route="Home"></HeaderComponent>

  <MDBContainer>
    <MDBRow class="bg-light">
      <MDBCol class="tela-cadastro">
        <h1 class="h1-responsive font-weight-bold text-left">Panini</h1>
        <p>A melhor plataforma para receber pães de todos os tipos da sua casa! Faça seu cadastro e conheça mais sobre nós!</p>
        <h2 class="h2-responsive font-weight-bold text-left">Cadastro</h2>
        <p>Informe seus dados para poder fazer parte do seleto grupo de pessoas que a Panini irá atender</p>
        <br />
        <MDBInput label="Informe seu nome" v-model="nome" />
        <br />
        <MDBInput label="Informe seu e-mail" v-model="email" type="email" />
        <br />
        <MDBRow>
          <MDBCol md="3">
            <MDBInput label="CEP" v-model="cep" type="number" />
          </MDBCol>
          <MDBCol md="7">
            <MDBInput label="Cidade" v-model="cidade" type="text" />
          </MDBCol>
          <MDBCol md="2">
            <MDBInput label="UF" v-model="uf" type="text" />
          </MDBCol>
        </MDBRow>
        <br />
        <MDBRow>
          <MDBCol md="8">
            <MDBInput label="Logradouro" v-model="logradouro" type="text" />
          </MDBCol>
          <MDBCol md="4">
            <MDBInput label="Número" v-model="cidade" type="text" />
          </MDBCol>
        </MDBRow>
        <br />
        <MDBRow>
          <MDBCol md="6">
            <MDBInput label="Complemento" v-model="complemento" type="text" />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput label="Bairro" v-model="bairro" type="text" />
          </MDBCol>
        </MDBRow>
        <br />
        <MDBBtn color="secondary" @click="salvarCadastro()">
          Salvar dados cadastro
          <MDBIcon icon="chevron-right" />
        </MDBBtn>
        <MDBBtn color="secondary" @click="cancelarCadastro()">
          Cancelar cadastro
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
    const nome = ref('');
    const email = ref('');
    const cep = ref(0);
    const cidade = ref('');
    const uf = ref('');
    const logradouro = ref(0);
    const numero = ref(0);
    const complemento = ref('');
    const bairro = ref('');
    const checkbox1 = ref(false);
    const checkbox2 = ref(false);
    const checkbox3 = ref(false);
    return {
      nome,
      email,
      cep,
      cidade,
      uf,
      logradouro,
      numero,
      complemento,
      bairro,
      checkbox1,
      checkbox2,
      checkbox3
    };
  },
  methods: {
    salvarCadastro() {
      this.$router.push({
        name: "informacoes",
      });
    },
    cancelarCadastro() {
      this.$router.push({
        name: "home",
      });
    },
  },
};
</script>
