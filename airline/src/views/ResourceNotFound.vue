<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
const props = withDefaults(
    defineProps<{
        resource: string
    }>(),
    {
    resource: 'page'
    }
)
</script>

<template>
    <h1>Resource Not Found</h1>
    <h3>The {{ resource }} you're looking for is not here.</h3>
    <router-link :to="{ name: 'event-list-view' }">Back to the home page</router-link>
</template>