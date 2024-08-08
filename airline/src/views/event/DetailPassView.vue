<script setup lang="ts">
import { toRefs, defineProps } from 'vue'
import { type Passen } from '@/types'
import { useMessageStore } from '@/stores/message'
import { useRouter } from 'vue-router';

const props = defineProps<{
    event: Passen
    _id: String
}>()
const { event } = toRefs(props)
const router = useRouter()
const store = useMessageStore ()
const edit = () => {
    store.updateMessage('Update in progress for ' + props.event.name)
  setTimeout (() => {
    store.resetMessage()
  }, 3000)
  router.push({ name: 'event-list-view', params: { id: props.event._id } })
}
</script>

<template>
    
    <p>Trips: {{ event.trips }}</p>
    <button @click="edit">Edit</button>
    
</template>
