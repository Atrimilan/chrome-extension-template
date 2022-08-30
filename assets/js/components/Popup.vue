<template>
    <div class="wrapper">
        <h1>{{ welcome }}</h1>
        <p>{{ description }}</p>

        <hr />

        <p>Time: {{ time }} s</p>
        <button v-on:click="getTime()" class="loadButton">Get stored time</button>
    </div>
</template>

<script>
export default {
    name: "Popup",
    data() {
        return {
            welcome: "Hello Earth!",
            description: "Have a nice day!",
            time: "-",
        };
    },
    methods: {
        getTime() {
            // Get value from chrome storage
            chrome.storage.sync.get("time", ({ time }) => {
                this.time = time === undefined ? "-" : time;
            });
            console.log("Time has been loaded from local Chrome storage.");
        },
    },
    mounted() {
        // Executed when the component is added to the DOM
    },
};
</script>