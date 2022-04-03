<template>
    <MDBCard>
        <a v-mdb-ripple="{ color: 'light' }">
            <MDBCardImg src="`../assets/pao.jpg`" top alt="..." />
        </a>
        <MDBCardBody>
            <MDBCardTitle>{{ this.title }}</MDBCardTitle>
            <MDBCardText>{{ this.tags }}</MDBCardText>
            <MDBBtn tag="a" href="#!" color="primary">Button</MDBBtn>
        </MDBCardBody>
    </MDBCard>
</template>

<script>
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, MDBBtn, mdbRipple } from "mdb-vue-ui-kit";
export default {
    components: {
        MDBCard,
        MDBCardBody,
        MDBCardTitle,
        MDBCardText,
        MDBCardImg,
        MDBBtn
    },
    directives: {
        mdbRipple
    },
    props: {
        imagePath: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        tags: {
            type: Array,
            required: true,
        },

    },
};
</script>