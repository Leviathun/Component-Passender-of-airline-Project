<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { type Passen } from '@/types'
import PassService from '@/services/PassService'
import { useRouter } from 'vue-router'

const event = ref<Passen | null>(null)
const props = defineProps ({
    _id: {
        type: String,
        required: true
    }
})
const router = useRouter ()
onMounted (() => {
    PassService.getEvent(parseInt(props._id))
        .then((response) => {
            event.value = response.data
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
        <h1>{{ event.name }}</h1>
        <nav>
            <RouterLink :to="{ name: 'event-detail-view' }">Details</RouterLink>
            |
            <RouterLink :to="{ name: 'event-register-view' }">Register</RouterLink>
            
        </nav>
        <RouterView :event="event" />
    </div>
</template>

