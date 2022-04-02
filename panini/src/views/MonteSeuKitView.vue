<script setup>
import CardComponent from '../components/CardComponent.vue';
</script>

<template id="monte-seu-kit-view">
    <h1 class="title m-5">Monte seu kit</h1>
    <MDBRow class="m-5">
        <MDBCol>
            <form>
                <MDBRow>
                    <MDBCol sm="12" md="6" lg="6" xl="6" xxl="6">
                        <div class="form-group">
                            <input
                                type="text"
                                class="form-control"
                                id="nome"
                                placeholder="Nome"
                                v-model="breadName"
                            />
                        </div>
                    </MDBCol>
                    <MDBCol sm="12" md="6" lg="6" xl="6" xxl="6">
                        <div class="form-group">
                            <Multiselect
                                v-model="pickedIngredients"
                                mode="tags"
                                placeholder="Selecione os ingredientes"
                                :close-on-select="false"
                                :searchable="true"
                                :create-option="true"
                                :options="this.ingredients"
                            />
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol sm="12" md="6" lg="6" xl="6" xxl="6">
                        <Multiselect
                            v-model="pickedCategories"
                            mode="tags"
                            placeholder="Selecione as categorias"
                            :close-on-select="false"
                            :searchable="true"
                            :create-option="true"
                            :options="this.categories"
                        />
                    </MDBCol>
                    <MDBCol sm="12" md="6" lg="6" xl="6" xxl="6">
                        <div class="form-group">
                            <Multiselect
                                v-model="pickedNutritionalInformations"
                                mode="tags"
                                placeholder="Selecione as características nutricionais"
                                :close-on-select="false"
                                :searchable="true"
                                :create-option="true"
                                :options="this.nutritionalInformations"
                            />
                        </div>
                    </MDBCol>
                </MDBRow>

                <div class="d-grid gap-2 d-md-flex justify-content-center mt-3">
                    <MDBBtn color="secondary" rounded @click="filtrar()">Pesquisar</MDBBtn>
                </div>
            </form>
        </MDBCol>
    </MDBRow>
    <MDBRow :cols="['1', 'md-3', 'lg-5', 'xg-7']" class="g-4 m-5">
        <div v-for="(bread, index) in this.filteredBreads" :key="index">
            <MDBCol>
                <CardComponent :imagePath="bread.imagePath" :title="bread.name" :tags="getTags(bread)" />
            </MDBCol>
        </div>
    </MDBRow>
</template>
<style src="@vueform/multiselect/themes/default.css"></style>
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
import BreadService from '@/services/BreadService';
import CategoryService from '@/services/CategoryService';
import IngredientService from '@/services/IngredientService';
import NutritionalInformationService from '@/services/NutritionalInformationService';

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
            breads: [],
            filteredBreads: [],
            pickedIngredients: [],
            ingredients: [],
            pickedCategories: [],
            categories: [],
            pickedNutritionalInformations: [],
            nutritionalInformations: [],
            breadName: ""
        };
    },
    mounted() {
        BreadService.setDefaultList();
        this.breads = BreadService.getAll();
        this.filteredBreads = this.breads;

        CategoryService.setDefaultList();
        this.categories = CategoryService.getAll();

        IngredientService.setDefaultList();
        this.ingredients = IngredientService.getAll();

        NutritionalInformationService.setDefaultList();
        this.nutritionalInformations = NutritionalInformationService.getAll();
    },
    methods: {
        filtrar() {
            this.filteredBreads = this.breads;

            if (this.breadName) {
                this.filteredBreads = this.filteredBreads.filter(bread => {
                    return bread.name.toLowerCase().includes(this.breadName.toLowerCase());
                });
            }

            if (this.pickedCategories.length != 0) {
                this.filteredBreads = this.filteredBreads.filter(bread => {
                    return this.pickedCategories.every(category => bread.categories.includes(category));
                });
            }

            if (this.pickedIngredients.length != 0) {
                this.filteredBreads = this.filteredBreads.filter(bread => {
                    return this.pickedIngredients.every(ingredient => bread.ingredients.includes(ingredient));
                });
            }

            if (this.pickedNutritionalInformations.length != 0) {
                this.filteredBreads = this.filteredBreads.filter(bread => {
                    return this.pickedNutritionalInformations.every(nutritionalInformation => bread.nutritionalInformations.includes(nutritionalInformation));
                });
            }

        },
        getTags(bread) {
            const tags = [];

            bread.categories.forEach(category => {
                tags.push({
                    type: 'Category',
                    description: category
                });
            });

            bread.ingredients.forEach(ingredient => {
                tags.push({
                    type: 'Ingredient',
                    description: ingredient
                });
            });

            bread.nutritionalInformations.forEach(nutritionalInformation => {
                tags.push({
                    type: 'NutritionalInformation',
                    description: nutritionalInformation
                });
            });
            console.log(tags)
            return tags;
        }
    }
};
</script>
