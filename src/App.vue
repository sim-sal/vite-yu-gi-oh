<script>
import { store } from '../src/store'
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'
import CharactersList from './components/CharactersList.vue'
import AppLoader from './components/AppLoader.vue'
import AppSelect from './components/AppSelect.vue'


export default {
  components: {
    AppHeader,
    CharactersList,
    AppLoader,
    AppSelect
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCharacters() {

      let myUrl = store.apiURL;

      if (store.searchArchetypes !== "") {
        myUrl
      }

      axios.get(store.apiURL)
        .then(res => {
          store.charactersList = res.data.data;
          store.loading = false;
        })
        .catch(err => {
          console.log(err);
        })

    },

    getArchetypesName() {

      axios.get(store.apiFilteredUrl)
        .then(res => {
          store.archetypeNameList = res.data;
          store.loading = false;
        })
        .catch(err => {
          console.log(err);
        })

    }


  },
  created() {
    this.getCharacters();
    this.getArchetypesName();
  }
} 
</script>

<template>
  <AppLoader v-if="store.loading" />
  <AppHeader message="Yu-Gi-Oh Api" />
  <main>
    <AppSelect @search="getCharacters" />
    <CharactersList />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss';

main {
  background-color: rgb(212, 143, 58);
  padding: 0 100px 100px 100px;
}
</style>
