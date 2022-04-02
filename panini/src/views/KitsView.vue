<script setup>
import CardComponent from '../components/CardComponent.vue';
</script>

<template id="kits-view">
    <h1 class="title m-5">Kits prontos</h1>
    <MDBRow :cols="['sm-2', 'md-3', 'lg-5', 'xg-7']" class="g-4 m-5">
        <div v-for="(kit, index) in this.kits" :key="index">
            <MDBCol>
                <CardComponent
                    :imagePath="kit.imagePath"
                    :title="kit.name"
                    :tags="getTags(kit)"
                    :description="kit.description"
                    height="550px"
                />
            </MDBCol>
        </div>
    </MDBRow>
</template>

    <style>
.title {
    color: #a316fd;
    font-size: 2em;
    font-weight: 800;
}
</style>

<script>
import { MDBCol, MDBRow, MDBCardGroup, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImg, MDBBtn } from "mdb-vue-ui-kit";
import Multiselect from '@vueform/multiselect'
import KitService from '@/services/KitService';

export default {
    components: {
        CardComponent,
        MDBBtn,
        Multiselect,
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
            kits: []
        };
    },
    mounted() {
        KitService.setDefaultList();
        this.kits = KitService.getAll();
    },
    methods: {
        getTags(kit) {
            const tags = [];

            kit.categories.forEach(category => {
                tags.push({
                    type: 'Category',
                    description: category
                });
            });

            kit.ingredients.forEach(ingredient => {
                tags.push({
                    type: 'Ingredient',
                    description: ingredient
                });
            });

            kit.nutritionalInformations.forEach(nutritionalInformation => {
                tags.push({
                    type: 'NutritionalInformation',
                    description: nutritionalInformation
                });
            });

            return tags;
        }
    }
};
</script>
