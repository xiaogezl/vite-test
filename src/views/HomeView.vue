<script setup lang="ts">
import { useCounterStore } from '@/stores/index'
const counter = useCounterStore()
counter.count++
// counter.$patch({ count: counter.count + 1 })
console.log(counter, 1)
</script>

<template>
    <main>
        {{ counter }}
    </main>
</template>
@/stores
