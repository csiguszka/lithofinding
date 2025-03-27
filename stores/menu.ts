import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
    const open = ref(false)
    function close() {
        open.value = false
    }
    function change() {
        open.value = !open.value
    }
    return {open, change, close }
})