<template>
    <MDBCard class="h-100">
        <a v-mdb-ripple="{ color: 'light' }">
            <MDBCardImg :src="`/src/assets/${this.imagePath}`" top alt="..." />
        </a>
        <MDBCardBody>
            <MDBCardTitle>{{ this.title }}</MDBCardTitle>
            <MDBCardText >
                <div class="tags" v-for="(tag, index) in this.tags" :key="index">
                    <MDBBadge :color="getBadgeColor(tag.type)" pill>{{ tag.description }}</MDBBadge>
                </div>
                
            </MDBCardText>
            <MDBBtn outline="secondary">Adicionar ao Carrinho</MDBBtn>
        </MDBCardBody>
    </MDBCard>
</template>

<script>
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, MDBBtn, mdbRipple, MDBBadge } from "mdb-vue-ui-kit";
export default {
    components: {
        MDBBadge,
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
    methods: {
        getBadgeColor(type) {
            switch(type) {
                case 'Ingredient':
                    return 'primary';
                case 'NutritionalValue':
                    return 'success';
                case 'Equipment':
                    return 'warning';
                case 'Tool':
                    return 'danger';
                default:
                    return 'dark';
            }
        }
    }
};
</script>