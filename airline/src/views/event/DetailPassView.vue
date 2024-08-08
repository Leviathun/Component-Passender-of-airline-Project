<script setup lang="ts">
import { toRefs, defineProps } from 'vue'
import { type Passen } from '@/types'


const props = defineProps<{
    event: Passen
    _id: String
}>()
const { event } = toRefs(props)
</script>

<template>
    <h1>{{ event.name }}</h1>
    <p> trips : {{ event.trips }}</p>
    <h3>{{ event.airline }}</h3>
    
</template>
