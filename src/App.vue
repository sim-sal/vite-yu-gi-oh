<script>
import { store } from '../src/store'
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'
import CharactersList from './components/CharactersList.vue'


export default {
  components: {
    AppHeader,
    CharactersList
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCharacters() {
      axios.get(store.apiURL)
        .then(res => {
          store.charactersList = res.data.data;
        })
        .catch(err => {
          console.log(err);
        })
    }
  },
  created() {
    this.getCharacters();
  }
} 
</script>

<template>
  <AppHeader message="Yu-Gi-Oh Api" />
  <main>
    <CharactersList />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss';

main {
  background-color: rgb(212, 143, 58);
}
</style>
