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
                            <input type="text" class="form-control" id="nome" placeholder="Nome" />
                        </div>
                    </MDBCol>
                    <MDBCol sm="12" md="6" lg="6" xl="6" xxl="6">
                        <div class="form-group">
                            <Multiselect
                                v-model="ingredientesEscolhidos"
                                mode="tags"
                                placeholder="Selecione os ingredientes"
                                :close-on-select="false"
                                :searchable="true"
                                :create-option="true"
                                :options="this.ingredientes"
                            />
                        </div>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol sm="12" md="6" lg="6" xl="6" xxl="6">
                        <Multiselect
                            v-model="categoriasEscolhidas"
                            mode="tags"
                            placeholder="Selecione as categorias"
                            :close-on-select="false"
                            :searchable="true"
                            :create-option="true"
                            :options="this.categorias"
                        />
                    </MDBCol>
                    <MDBCol sm="12" md="6" lg="6" xl="6" xxl="6">
                        <div class="form-group">
                            <Multiselect
                                v-model="caracteristicasEscolhidas"
                                mode="tags"
                                placeholder="Selecione as características"
                                :close-on-select="false"
                                :searchable="true"
                                :create-option="true"
                                :options="this.caracteristicas"
                            />
                        </div>
                    </MDBCol>
                </MDBRow>

                <div class="d-grid gap-2 d-md-flex justify-content-center mt-3">
                    <MDBBtn color="secondary" rounded>Pesquisar</MDBBtn>
                </div>
            </form>
        </MDBCol>
    </MDBRow>
    <MDBRow :cols="['1', 'md-3', 'lg-5', 'xg-7']" class="g-4 m-5">
        <div v-for="(pao, index) in this.paes" :key="index">
            <MDBCol>
                <CardComponent
                    :imagePath="pao.imagePath"
                    :title="pao.description"
                    :tags="pao.tags"
                />
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
            ingredientesEscolhidos: null,
            ingredientes: [
                'Trigo',
                'Cebola',
                'Alho',
            ],
            categoriasEscolhidas: null,
            categorias: [
                'Salgado',
                'Doce',
            ],
            caracteristicasEscolhidas: null,
            caracteristicas: [
                'Vegano',
                'Sem Glúten',
            ]
        };
    },
};
</script>
