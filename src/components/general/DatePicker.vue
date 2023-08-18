<template>
    <div class="datepicker_container">
        <span class="label">{{ props.label }}</span>

        <!-- Vue date picker component -->
        <VueDatePicker v-model="date" format="MM / dd / yyyy">
            <!-- Remove  the calendar icon on the left side -->
            <template #input-icon>
            </template>
            <!-- Add calendar icon on the right side -->
            <template #clear-icon="{ clear }">
                <font-awesome-icon icon="fa-regular fa-calendar" class="input-slot-icon" />
            </template>
        </VueDatePicker>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';

const props = defineProps({
    dateType: String,
    label: String
});
const date = ref(new Date);
</script>

<style scoped>
.datepicker_container {
    position: relative;
    margin-bottom: 20px;
}

.datepicker_container .label {
    position: absolute;
    top: -10px;
    z-index: 1;
    background: white;
    left: 8px;
    font-size: 13px;
    padding: 0 5px;
    color: var(--calendar-label);
}

.input-slot-icon {
    width: auto;
    margin-right: 15px;
}
</style>