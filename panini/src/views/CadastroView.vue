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
        <MDBInput label="Informe seu nome" v-model="cadastroPessoa.nome" />
        <br />
        <MDBInput label="Informe seu e-mail" v-model="cadastroPessoa.email" type="email" />
        <br />
        <MDBRow>
          <MDBCol md="3">
            <MDBInput label="CEP" v-model="cadastroPessoa.cep" type="number" />
          </MDBCol>
          <MDBCol md="7">
            <MDBInput label="Cidade" v-model="cadastroPessoa.cidade" type="text" />
          </MDBCol>
          <MDBCol md="2">
            <MDBInput label="UF" v-model="cadastroPessoa.uf" type="text" />
          </MDBCol>
        </MDBRow>
        <br />
        <MDBRow>
          <MDBCol md="8">
            <MDBInput label="Logradouro" v-model="cadastroPessoa.logradouro" type="text" />
          </MDBCol>
          <MDBCol md="4">
            <MDBInput label="Número" v-model="cadastroPessoa.numero" type="text" />
          </MDBCol>
        </MDBRow>
        <br />
        <MDBRow>
          <MDBCol md="6">
            <MDBInput label="Complemento" v-model="cadastroPessoa.complemento" type="text" />
          </MDBCol>
          <MDBCol md="6">
            <MDBInput label="Bairro" v-model="cadastroPessoa.bairro" type="text" />
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
        <div v-show="flagErro">
          <br />
          {{ flagErro }}
          <div class="alert alert-danger">*** {{ mensagemErro }} ***</div>
        </div>
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
  name: "salvarCadastro",

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
    };
  },
  data() {
    return {
      mensagemErro: "",
      flagErro: false,
      cadastroPessoa: {
        id: null,
        nome: "",
        email: "",
        cep: 0,
        cidade: "",
        uf: "",
        logradouro: "",
        numero: "",
        complemento: "",
        bairro: "",
        ingredientes: {
          farinhaComum: false,
          farinhaIntegral: false,
          farinhaIntegralEnriquecida: false,
          acucarBranco: false,
          acucarMascavo: false,
          adocante: false,
          queijos: false,
          frutasCristalizadas: false,
          ervasEspeciarias: false,
        },
        formas: {
          pequenoIndividual: false,
          medio4Pessoas: false,
          grande8Pessoas: false,
          redondo: false,
          comprido: false,
          quadrado: false,
          corClara: false,
          corMedia: false,
          corEscura: false,
        },
      }
    }
  },
  computed: {
    ...mapGetters(["flagInclui", "ultimoId"]),
  },
  methods: {
    ...mapActions(["incluirPessoa", "setFlagInclui", "incrementarId"]),
    salvarCadastro() {
      if (this.criticarCampos()) {
        let dados = {
          id: this.ultimoId,
          nome: this.cadastroPessoa.nome,
          email: this.cadastroPessoa.email,
          cep: this.cadastroPessoa.cep,
          cidade: this.cadastroPessoa.cidade,
          uf: this.cadastroPessoa.uf,
          logradouro: this.cadastroPessoa.logradouro,
          numero: this.cadastroPessoa.numero,
          complemento: this.cadastroPessoa.complemento,
          bairro: this.cadastroPessoa.bairro,
          ingredientes: {
            farinhaComum: false,
            farinhaIntegral: false,
            farinhaIntegralEnriquecida: false,
            acucarBranco: false,
            acucarMascavo: false,
            adocante: false,
            queijos: false,
            frutasCristalizadas: false,
            ervasEspeciarias: false,
          },
          formas: {
            pequenoIndividual: false,
            medio4Pessoas: false,
            grande8Pessoas: false,
            redondo: false,
            comprido: false,
            quadrado: false,
            corClara: false,
            corMedia: false,
            corEscura: false,
          },
        };
        this.incluirPessoa(dados);
        this.incrementarId();
        this.registroIncluido = true;
        this.flagErro = false;
        this.$router.push({
          name: "informacoes",
          params: { id: dados.id }
        });
      } else {
        this.mensagemErro = "Todos os campos devem ser preenchidos...";
        this.flagErro = true;
      }
    },
    criticarCampos() {
      return (
        this.cadastroPessoa.nome &&
        this.cadastroPessoa.email &&
        this.cadastroPessoa.cidade &&
        this.cadastroPessoa.logradouro
      );
    },
    cancelarCadastro() {
      this.$router.push({
        name: "home",
      });
    },
  },
};
</script>
