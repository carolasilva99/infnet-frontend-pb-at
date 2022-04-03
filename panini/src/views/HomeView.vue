<script setup>
import HeaderComponent from "../components/HeaderComponent.vue";
import MonteSeuKitView from "./MonteSeuKitView.vue";
import KitsView from "./KitsView.vue";
</script>

<template>
  <HeaderComponent :isUserLoggedIn="false" active-route="Home" />

  <MDBContainer>
    <MDBRow class="bg-light" id="home">
      <MDBCol class="text-info-col">
        <h1 class="h1-responsive font-weight-bold text-left">Panini</h1>
        <p>
          A melhor plataforma para receber pães de todos os tipos da sua casa!
          Faça seu cadastro e conheça mais sobre nós!
        </p>
<<<<<<< HEAD
        <MDBBtn color="secondary" @click="cadastro()">Faça seu cadastro <MDBIcon icon="chevron-right" /></MDBBtn>
=======
        <MDBBtn color="secondary">
          Faça seu cadastro
          <MDBIcon icon="chevron-right" />
        </MDBBtn>
>>>>>>> 5718ee7a92b914f89bf6b0c123a1d9835715d4eb
      </MDBCol>
      <MDBCol
        class="landing-page-image-col d-none d-sm-block d-sm-none d-md-block"
      >
        <img
          src="../assets/landing-page-image.jpg"
          alt="Imagem de padeiro"
          class="landing-page-image"
        />
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  <MonteSeuKitView />
  <KitsView />
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
import { MDBCol, MDBRow, MDBContainer, MDBBtn, MDBIcon } from "mdb-vue-ui-kit";

<<<<<<< HEAD
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
=======
export default {
  components: {
    MDBCol,
    MDBRow,
    MDBContainer,
    MDBBtn,
    MDBIcon,
  },
};
>>>>>>> 5718ee7a92b914f89bf6b0c123a1d9835715d4eb
</script>
