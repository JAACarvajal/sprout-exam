<template>
    <header class="content_header" v-if="props.shownContent === 'attendance_logs'">
        <div class="content_header_title">
            <font-awesome-icon icon="fa-regular fa-calendar" />
            <span class="title">Date Range</span>
        </div>
        <div class="content_header_buttons">
            <button @click="emits('update-display-logs', 'active_logs')"
                :class="['button', props.logsToDisplay === 'active_logs' ? 'active' : '']">
                Active Logs
                <font-awesome-icon icon="fa-solid fa-check" />
            </button>
            <button @click="emits('update-display-logs', 'deleted_logs')"
                :class="['button', props.logsToDisplay === 'deleted_logs' ? 'active' : '']">
                Deleted Logs
            </button>
        </div>
    </header>
    <header class="content_header" v-else>
        <div class="content_header_title">
            <h2>Exported Files</h2>
            <p>No file to download</p>
        </div>
    </header>
</template>
<script setup>
const props = defineProps({
    logsToDisplay: String,
    shownContent: String
});

const emits = defineEmits(['update-display-logs']);
</script>