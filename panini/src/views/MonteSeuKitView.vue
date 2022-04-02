<script setup>
import CardComponent from '../components/CardComponent.vue';
</script>

<template id="monte-seu-kit-view">
    <CardComponent imagePath="pao.jpg" title="teste" :tags="[{type: 'Ingredient', description: 'Trigo'}, {type: 'NutritionalValue', description: 'Vegano'}]" />
</template>
