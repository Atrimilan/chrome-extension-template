<template>
    <div class="wrapper">
        <h1>{{ welcome }}</h1>
        <p>Have a nice day !</p>
        <p>Time: {{ time }}</p>

        <button v-on:click="getTime()">Update time</button>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            welcome: "Hello Earth!",
            time: "",
        };
    },
    methods: {
        getTime() {
            chrome.storage.sync.get("time", ({ time }) => {
                this.time = time;
            });
        },
    },
    /* mounted() {
        chrome.storage.sync.get("time", ({ time }) => {
            this.time = time;
        });
    },*/
};
</script>