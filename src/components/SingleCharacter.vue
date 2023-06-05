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
        <div>{{ details.archetype }} {{ details.race }}</div>
    </div>
</template>

<style scoped lang="scss">
.card {
    background-color: rgb(212, 143, 58);
    border-radius: 0px;
}
</style>