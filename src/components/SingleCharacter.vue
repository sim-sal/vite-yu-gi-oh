<script>
export default {
    name: 'SingleCharacter',
    props: {
        details: Object
    }
}
</script>

<template>
    <!-- card character di esempio -->
    <div class="card text-center">
        <img :src="details.card_images[0].image_url" alt="card-img">
        <h4>{{ details.name }}</h4>
        <div>{{ details.archetype }}</div>
    </div>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;

.card {
    background-color: $bg-color;
    border-radius: 0px;
    width: 230px;

    h4 {
        color: white;
    }
}
</style>