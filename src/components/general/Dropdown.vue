<template>
    <div class="filter_dropdown">
        <button style="width: 100%;" @click="showDropdown = !showDropdown">Sprout Solutions</button>
        <div v-if="showDropdown"
            style="position: absolute; width: 100%; display: flex; flex-direction: column; align-items: center;">
            <div style="width: 100%; text-align: center; border: 1px solid black;">asd</div>
            <div style="width: 100%; text-align: center; border: 1px solid black;">asd</div>
            <div style="width: 100%; text-align: center; border: 1px solid black;">asd</div>
            <div style="width: 100%; text-align: center; border: 1px solid black;">asd</div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
const showDropdown = ref(false);
</script>

<style scoped></style>