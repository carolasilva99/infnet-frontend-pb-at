<script setup>
import Header from "../components/Header.vue";
</script>

<template>
  <Header :isUserLoggedIn="false" active-route="Home"></Header>

  <MDBContainer>
    <MDBRow class="bg-light">
      <MDBCol class="text-info-col">
        <h1 class="h1-responsive font-weight-bold text-left">
          Panini
        </h1>
        <p>
          A melhor plataforma para receber pães de todos os tipos da sua casa! Faça seu cadastro e conheça mais sobre nós!
        </p>
        <MDBBtn color="secondary" @click="cadastro()">Faça seu cadastro <MDBIcon icon="chevron-right" /></MDBBtn>
      </MDBCol>
      <MDBCol class="landing-page-image-col d-none d-sm-block d-sm-none d-md-block">
        <img src="../assets/landing-page-image.jpg" alt="Imagem de padeiro" class="landing-page-image">
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<style>
.landing-page-image {
  width: 95%;
  height: 95%;
}

.text-info-col {
  padding-top: 20%;
}

h1 {
  font-size: 4rem;
}
</style>

<script>
  import { MDBCol, MDBRow, MDBContainer, MDBBtn, MDBIcon  } from 'mdb-vue-ui-kit';

  export default {
    components: {
      MDBCol,
      MDBRow,
      MDBContainer,
      MDBBtn,
      MDBIcon 
    },
  methods: {
    cadastro() {
      this.$router.push({
        name: "cadastro",
      });
    },
  },
  };
</script>
