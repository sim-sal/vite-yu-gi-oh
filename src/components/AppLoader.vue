<script>
export default {
    name: 'AppLoader',
}
</script>

<template>
    <div class="loader">
        <div class="text">CARICAMENTO...</div>
    </div>
</template>

<style scoped lang="scss">
.loader {
    height: 100vh;
    width: 100%;
    background-color: black;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    .text {
        font-size: 100px;
        color: white;
    }
}
</style>