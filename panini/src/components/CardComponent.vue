<template>
    <MDBCard :style="`height: ${this.height}`">
        <a v-mdb-ripple="{ color: 'light' }">
            <MDBCardImg :src="`/src/assets/${this.imagePath}`" top alt="..." />
        </a>
        <MDBCardBody>
            <MDBCardTitle>{{ this.title }}</MDBCardTitle>
            <MDBCardText>
                <div v-if="this.description" class="mt-3 mb-3">{{ this.description }}</div>

                <span class="tags" v-for="(tag, index) in this.tags" :key="index">
                    <MDBBadge :color="getBadgeColor(tag.type)" pill>{{ tag.description }}</MDBBadge>
                </span>
            </MDBCardText>
        </MDBCardBody>
        <MDBCardFooter>
            <MDBBtn outline="secondary">Adicionar ao Carrinho</MDBBtn>
        </MDBCardFooter>
    </MDBCard>
</template>

<script>
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, MDBBtn, mdbRipple, MDBBadge, MDBCardFooter } from "mdb-vue-ui-kit";
export default {
    components: {
        MDBBadge,
        MDBCard,
        MDBCardBody,
        MDBCardTitle,
        MDBCardText,
        MDBCardImg,
        MDBBtn,
        MDBCardFooter
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
        description: {
            type: String
        },
        height: {
            type: String,
            default: "400px"
        }
    },
    methods: {
        getBadgeColor(type) {
            switch (type) {
                case 'Ingredient':
                    return 'primary';
                case 'NutritionalInformation':
                    return 'secondary';
                case 'Category':
                    return 'success';
                default:
                    return 'danger';
            }
        }
    }
};
</script>