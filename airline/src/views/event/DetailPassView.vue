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
    
    <p>Trips: {{ event.trips }}</p>
    
    
</template>
