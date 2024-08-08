<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { type Passen } from '@/types'
import PassService from '@/services/PassService'
import { useRouter } from 'vue-router'

const event = ref<Passen | null>(null)
const props = defineProps ({
    id: {
        type: String,
        required: true
    }
})
const router = useRouter ()
onMounted (() => {
    PassService.getEvent(props.id)
        .then((response) => {
            event.value = response.data
            console.log(event.value)
        })
        .catch((error) => {
            if (error.respose && error.response.status === 404) {
            router.push ({
                name: '404-resource-view',
                params: { resource: 'event' }
            })
            } else {
                router.push ({ name: 'not-found' })
            }
        })
})
</script>
<template>
    <div v-if="event">
        
        <nav>
            <RouterLink :to="{ name: 'event-detail-view' ,params: { id: event._id } }">Details</RouterLink>
            |
            <RouterLink :to="{ name: 'event-airline-view' ,params: { id: event._id } }">Airline</RouterLink>
            
        </nav>
        <RouterView :event="event" />
    </div>
</template>

