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
  // setup() {
    // const chckIngr1 = ref(false);
    // const chckIngr2 = ref(false);
    // const chckIngr3 = ref(false);
    // const chckIngr4 = ref(false);
    // const chckIngr5 = ref(false);
    // const chckIngr6 = ref(false);
    // const chckIngr7 = ref(false);
    // const chckIngr8 = ref(false);
    // const chckIngr9 = ref(false);
    // const chckText1 = ref(false);
    // const chckText2 = ref(false);
    // const chckText3 = ref(false);
    // const chckText4 = ref(false);
    // const chckText5 = ref(false);
    // const chckText6 = ref(false);
    // const chckText7 = ref(false);
    // const chckText8 = ref(false);
    // const chckText9 = ref(false);
    // return {
      // nome,
      // email,
      // cep,
      // cidade,
      // uf,
      // logradouro,
      // numero,
      // complemento,
      // bairro,
      // chckIngr1,
      // chckIngr2,
      // chckIngr3,
      // chckIngr4,
      // chckIngr5,
      // chckIngr6,
      // chckIngr7,
      // chckIngr8,
      // chckIngr9,
      // chckText1,
      // chckText2,
      // chckText3,
      // chckText4,
      // chckText5,
      // chckText6,
      // chckText7,
      // chckText8,
      // chckText9,
  //   };
  // },
  data() {
    return {
      // mensagemErro: "",
      // flagErro: false,
      // pessoa: {
      //   id: null,
      //   nome: "",
      //   email: "",
      //   cep: 0,
      //   cidade: "",
      //   uf: "",
      //   logradouro: "",
      //   numero: "",
      //   complemento: "",
      //   bairro: "",
      //   ingredientes: {
      //     farinhaComum: false,
      //     farinhaIntegral: false,
      //     farinhaIntegralEnriquecida: false,
      //     acucarBranco: false,
      //     acucarMascavo: false,
      //     adocante: false,
      //     queijos: false,
      //     frutasCristalizadas: false,
      //     ervasEspeciarias: false,
      //   },
      //   formas: {
      //     pequenoIndividual: false,
      //     medio4Pessoas: false,
      //     grande8Pessoas: false,
      //     redondo: false,
      //     comprido: false,
      //     quadrado: false,
      //     corClara: false,
      //     corMedia: false,
      //     corEscura: false,
      //   }
      // }
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
      // this.cadastroPessoa.ingredientes.farinhaComum = this.ingredientes.farinhaComum;
      // this.cadastroPessoa.ingredientes.farinhaIntegral = this.ingredientes.farinhaIntegral;
      // this.cadastroPessoa.ingredientes.farinhaIntegralEnriquecida = this.ingredientes.farinhaIntegralEnriquecida;
      // this.cadastroPessoa.ingredientes.acucarBranco = this.ingredientes.acucarBranco;
      // this.cadastroPessoa.ingredientes.acucarMascavo = this.ingredientes.acucarMascavo;
      // this.cadastroPessoa.ingredientes.adocante = this.ingredientes.adocante;
      // this.cadastroPessoa.ingredientes.queijos = this.ingredientes.queijos;
      // this.cadastroPessoa.ingredientes.frutasCristalizadas = this.ingredientes.frutasCristalizadas;
      // this.cadastroPessoa.ingredientes.ervasEspeciarias = this.ingredientes.ervasEspeciarias;

      // this.cadastroPessoa.formas.pequenoIndividual = this.formas.pequenoIndividual;
      // this.cadastroPessoa.formas.medio4Pessoas = this.formas.medio4Pessoas;
      // this.cadastroPessoa.formas.grande8Pessoas = this.formas.grande8Pessoas;
      // this.cadastroPessoa.formas.redondo = this.formas.redondo;
      // this.cadastroPessoa.formas.comprido = this.formas.comprido;
      // this.cadastroPessoa.formas.quadrado = this.formas.quadrado;
      // this.cadastroPessoa.formas.corClara = this.formas.corClara;
      // this.cadastroPessoa.formas.corMedia = this.formas.corMedia;
      // this.cadastroPessoa.formas.corEscura = this.formas.corEscura;
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
