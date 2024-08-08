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
    <div v-for="airline in event.airline" :key="airline._id">
        <h3>Airline: {{ airline.name }}</h3>
        <img :src="airline.logo" alt="Airline Logo" />
        <p>Country: {{ airline.country }}</p>
        <p>Slogan: {{ airline.slogan }}</p>
        <p>Headquarters: {{ airline.head_quaters }}</p>
        <p>Website: <a :href="'https://' + airline.website" target="_blank">{{ airline.website }}</a></p>
        <p>Established: {{ airline.established }}</p>
    </div>
    
</template>
