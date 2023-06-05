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
        <SingleCharacter v-for="character in store.charactersList" :details="character" />
    </section>
</template>

<style scoped lang="scss"></style>