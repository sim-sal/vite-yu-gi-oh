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
        <img src="" alt="card-img">
        <h4>Nome personaggio</h4>
        <div>Specie personaggio</div>
    </div>
</template>

<style scoped lang="scss">
.card {
    width: calc(100% / 5);
}
</style>