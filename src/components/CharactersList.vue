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

        <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
            <SingleCharacter v-for="character in store.charactersList" :details="character" class="col-md-3 ms-md-auto" />
        </div>

    </section>
</template>

<style scoped lang="scss">
.container {
    background-color: white;
}
</style>