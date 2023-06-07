<script>
import { store } from '../store'

export default {
    name: "AppSelect",
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div id="select-container">
        <div>
            <select name="" id="select-archetype" v-model="store.searchArchetypes" @change="$emit('search')">
                <option value="">Select Archetype</option>
                <option :value="archetype.archetype_name" v-for="(archetype, index) in store.archetypeNameList">
                    {{ archetype.archetype_name }}
                </option>
            </select>
        </div>
    </div>
</template>

<style scoped lang="scss">
#select-container {
    max-width: max-content;
    height: 100px;
    margin: auto;
    display: flex;
    align-items: center;

    #select-archetype {

        border: none;
        border-radius: 5px;
        padding: 5px;
    }
}
</style>