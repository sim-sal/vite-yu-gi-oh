<script>
export default {
    name: "AppSelect",
}
</script>

<template>
    <div id="select-container">
        <div>
            <select name="" id="select-archetype">
                <option value="">Select Archetype</option>
                <option value=""></option>
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