<template>
    <div class="app">
        <HomePage />
    </div>
</template>

<!-- This is a JS script, but it could be TS by giving the lang='ts' attribute -->
<script>
import HomePage from './components/HomePage.vue';

export default {
    name: "App",
    components: {
        HomePage,
    }
};
</script>

<!-- This style tag uses SCSS -->
<style scoped lang="scss">
@import "./scss/app.scss";
</style>