<template>
    <div class="container">
        <h1>{{ welcome }}</h1>
    </div>
</template>

<script>
export default {
    name: "Popup",
    data() {
        return {
            welcome: "Hello Earth!",
            /* ... */
        };
    },
    methods: {
        /* ... */
    },
    mounted() {
        // Executed when the component is added to the DOM
        /* ... */
    },
};
</script>