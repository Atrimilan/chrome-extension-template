<template>
    <div class="home">
        <h1>{{ i18n('home_page_title') }}</h1>
        <p>{{ i18n('home_page_description') + heart }}</p>
    </div>
</template>
  
<!-- This script tag uses Typescript -->
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Home',
    data() {
        return {
            heart: ' 💙',
        }
    },
    methods: {
        i18n(message) {
            return chrome.i18n.getMessage(message);
        },
    }
});
</script>

<!-- This style tag uses SCSS -->
<style scoped lang="scss">
.home {
    * {
        text-align: center;
    }
    h1 {
        color: rgb(8, 1, 34);
    }
    p {
        color: rgb(38, 22, 94);
    }
}
</style>