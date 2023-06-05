<script>
import { store } from '../store'

import SingleCharacter from './SingleCharacter.vue'

export default {
    name: 'CharactersList',
    components: {
        SingleCharacter
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <section class="container">

        <div id="bar">
            <h5><strong>Found {{ store.charactersList.length }} cards</strong></h5>
        </div>

        <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <SingleCharacter v-for="character in store.charactersList" :details="character" class="col-md-4 ms-md-3"
                :key="character.id" />
        </div>

    </section>
</template>

<style scoped lang="scss">
.container {
    background-color: white;
    padding: 50px;

    #bar {
        height: 60px;
        width: 99%;
        margin: auto;
        background-color: rgb(34, 38, 42);
        color: white;
        display: flex;
        align-items: center;

        h5 {
            margin-left: 15px;
        }
    }
}
</style>