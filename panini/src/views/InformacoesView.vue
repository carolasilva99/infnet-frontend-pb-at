<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
</script>

<template>
  <!-- <Header :isUserLoggedIn="false" active-route="Home"></Header> -->
  <HeaderComponent :isUserLoggedIn="false" active-route="Home"></HeaderComponent>

  <MDBContainer>
    <MDBRow class="bg-light">
      <MDBCol class="tela-cadastro">
        <h1 class="h1-responsive font-weight-bold text-left">Panini</h1>
        <p>A melhor plataforma para receber pães de todos os tipos da sua casa! Faça seu cadastro e conheça mais sobre nós!</p>
        <h2 class="h2-responsive font-weight-bold text-left">Informações complementares</h2>
        <p><span class="display-6"><strong>{{cadastroPessoa.nome}}</strong></span>, estas informações serão utilizadas na personalização das cestas de pães e sugestões de produtos que a Panini poderá lhe fazer</p>
        <br />
        <h3 class="h2-responsive font-weight-bold text-left">Ingredientes preferidos</h3>
        <div>
          <MDBCheckbox inline label="Farinha comum" v-model="cadastroPessoa.ingredientes.farinhaComum" />
          <MDBCheckbox inline label="Farinha integral" v-model="cadastroPessoa.ingredientes.farinhaIntegral" />
          <MDBCheckbox inline label="Farinha integral enriquecida" v-model="cadastroPessoa.ingredientes.farinhaIntegralEnriquecida" />
          <MDBCheckbox inline label="Açucar branco" v-model="cadastroPessoa.ingredientes.acucarBranco" />
          <MDBCheckbox inline label="Açucar macavo" v-model="cadastroPessoa.ingredientes.acucarMascavo" />
          <MDBCheckbox inline label="Adoçante" v-model="cadastroPessoa.ingredientes.adocante" />
          <MDBCheckbox inline label="Queijos" v-model="cadastroPessoa.ingredientes.queijos" />
          <MDBCheckbox inline label="Frutas cristalizadas" v-model="cadastroPessoa.ingredientes.frutasCristalizadas" />
          <MDBCheckbox inline label="Ervas e especiarias" v-model="cadastroPessoa.ingredientes.ervasEspeciarias" />
        </div>
        <br />
        <br />
        <h3 class="h2-responsive font-weight-bold text-left">Formas e tamanhos</h3>
        <div>
          <MDBCheckbox inline label="Pequeno - individual" v-model="cadastroPessoa.formas.pequenoIndividual" />
          <MDBCheckbox inline label="Médio - 4 pessoas" v-model="cadastroPessoa.formas.medio4Pessoas" />
          <MDBCheckbox inline label="Grande - 8 pessoas" v-model="cadastroPessoa.formas.grande8Pessoas" />
          <MDBCheckbox inline label="Redondo" v-model="cadastroPessoa.formas.redondo" />
          <MDBCheckbox inline label="Comprido" v-model="cadastroPessoa.formas.comprido" />
          <MDBCheckbox inline label="Quadrado" v-model="cadastroPessoa.formas.quadrado" />
          <MDBCheckbox inline label="Cor clara" v-model="cadastroPessoa.formas.corClara" />
          <MDBCheckbox inline label="Cor média" v-model="cadastroPessoa.formas.corMedia" />
          <MDBCheckbox inline label="Cor escura" v-model="cadastroPessoa.formas.corEscura" />
        </div>
        <br />
        <MDBBtn color="secondary" @click="salvarInformacoes()">
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

import { MDBCol, MDBRow, MDBContainer, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-vue-ui-kit';
import { ref } from 'vue';
import { mapActions, mapGetters } from "vuex";


export default {
  name: "salvarInformacoes",
  components: {
    MDBCol,
    MDBRow,
    MDBContainer,
    MDBBtn,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  },

  data() {
    return {

    }
  },
  created() {
    this.buscarPessoa(this.$route.params.id);
  },
  computed: {
    ...mapGetters(["cadastroPessoa"]),
  },
  methods: {
    ...mapActions(["alterarPessoa", "buscarPessoa"]),
    salvarInformacoes() {

      this.alterarPessoa(this.cadastroPessoa);
      this.$router.push({
        name: "home",
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
