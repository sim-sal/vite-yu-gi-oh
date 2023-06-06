<script>
import { store } from '../src/store'
import axios from 'axios';
import AppHeader from './components/AppHeader.vue'
import CharactersList from './components/CharactersList.vue'
import AppLoader from './components/AppLoader.vue'


export default {
  components: {
    AppHeader,
    CharactersList,
    AppLoader
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
          store.loading = false;
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
  <AppLoader v-if="store.loading" />
  <AppHeader message="Yu-Gi-Oh Api" />
  <main>
    <div id="select-container">
      <div>
        <select name="" id="select-archetype">
          <option value="">Select Archetype</option>
          <option value=""></option>
        </select>
      </div>

    </div>

    <CharactersList />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss';

main {
  background-color: rgb(212, 143, 58);
  padding: 0 100px 100px 100px;

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


}
</style>
