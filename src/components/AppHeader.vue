<script>
export default {
    name: 'AppHeader',
    props: ['message'],
}
</script>

<template>
    <header>

        <div class="container">
            <div id="header-title">
                <img src="../assets/yu-gi-oh.png" alt="">
                <h1>{{ message }}</h1>
            </div>
        </div>

    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/_variables.scss' as *;
@use '../styles/partials/mixins.scss' as *;

header .container {
    height: 100px;

    #header-title {
        width: 350px;
        height: 100%;
        @include flex-between-center;

        img {
            width: 100px;
        }
    }
}
</style>