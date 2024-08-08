import type { EventState, Passen } from '@/types'
import { defineStore } from 'pinia'
export const useEventStore = defineStore('event', {
    state: (): EventState => ({
        event: null
    }),
    actions: {
        setEvent(event: Passen): void {
            this.event = event
        }
    }
})