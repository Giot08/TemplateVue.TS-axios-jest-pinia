<template>
    <nav>
        <ul>
            <li v-for="(routes) in navbarRoutes" :key="routes">
                <router-link :to=routes.path>{{ routes.name }}</router-link>
            </li>
        </ul>
    </nav>
</template>
<script setup lang="ts">
import { reactive } from "@vue/runtime-core";
import { routes } from "../routes/routes.index"

const navbarRoutes = routes
const state = reactive({
    routes: navbarRoutes
})

</script>


<style scoped>
ul {
    display: flex;
    justify-content: center;
    gap: 10px;
}

ul,
li {
    list-style: none;
}

a {
    color: rgb(32, 208, 47);
    font-size: 1.5rem;
}
</style>