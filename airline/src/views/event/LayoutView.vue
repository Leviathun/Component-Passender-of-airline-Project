<script setup lang="ts">
import { useEventStore } from '@/stores/event'
import { storeToRefs } from 'pinia'

const store = useEventStore ()
const { event } = storeToRefs (store)

</script>
<template>
    <div v-if="event">
        <h1>{{ event.name }}</h1>
        <nav>
            <RouterLink :to="{ name: 'event-detail-view' ,params: { id: event._id } }">Details</RouterLink>
            |
            <RouterLink :to="{ name: 'event-airline-view' ,params: { id: event._id } }">Airline</RouterLink>
            
        </nav>
        <RouterView :event="event" />
    </div>
</template>

