import { reactive } from 'vue'

export const store = reactive({
    apiURL: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    apiFilteredUrl: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    searchArchetypes: "",
    charactersList: [],
    archetypeNameList: [],
    loading: true
})