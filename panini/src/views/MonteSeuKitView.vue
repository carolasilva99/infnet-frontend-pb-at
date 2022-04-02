<script setup>
import CardComponent from '../components/CardComponent.vue';
</script>

<template id="monte-seu-kit-view">
    <!-- <CardComponent imagePath="pao.jpg" title="teste" :tags="[{type: 'Ingredient', description: 'Trigo'}, {type: 'NutritionalValue', description: 'Vegano'}]" /> -->
    <MDBRow :cols="['1', 'md-3', 'lg-5', 'xg-7']" class="g-4 m-5">
        <div v-for="(pao, index) in this.paes" :key="index">
            <MDBCol>
                <CardComponent :imagePath="pao.imagePath" :title="pao.description" :tags="pao.tags" />
            </MDBCol>
        </div>
    </MDBRow>
</template>

<script>
import { MDBCol, MDBRow, MDBCardGroup, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg } from "mdb-vue-ui-kit";
export default {
    components: {
        CardComponent,
        MDBCol,
        MDBRow,
        MDBCardGroup,
        MDBCard,
        MDBCardBody,
        MDBCardTitle,
        MDBCardText,
        MDBCardImg
    },
    data() {
        return {
            paes: [
                {
                    imagePath: 'pao.jpg',
                    title: 'Pão de Alho',
                    tags: [
                        {
                            type: 'Ingredient',
                            description: 'Trigo'
                        },
                        {
                            type: 'NutritionalValue',
                            description: 'Vegano'
                        }
                    ]
                },
                {
                    imagePath: 'pao.jpg',
                    title: 'Pão de Cebola',
                    tags: [
                        {
                            type: 'Ingredient',
                            description: 'Trigo'
                        },
                        {
                            type: 'NutritionalValue',
                            description: 'Vegano'
                        },
                        {
                            type: 'NutritionalValue',
                            description: 'Sem Glúten'
                        }
                    ]
                }
            ],
        };
    },
};
</script>
