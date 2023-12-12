<script setup lang="ts">
import { useCounterStore } from '@/stores/index'
const counter = useCounterStore()
console.log(counter.count, counter.doubleCount, 'view')
</script>
<template>
    <div class="about">
        <h1>This is an about page</h1>
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
@/stores
