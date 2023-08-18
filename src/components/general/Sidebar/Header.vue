<template>
    <div class="sidebar_section sidebar_header">
        <h1 class="sidebar_header_title">Manage Attendance</h1>
        <p class="sidebar_header_description">
            Attendance management is where you can generate, add, edit, and export the logs of the employees.
        </p>
        <div class="sidebar_header_actions">
            <button :class="['button', props.shownContent === 'attendance_logs' ? 'active' : '']"
                @click="emits('set-content-page', 'attendance_logs')">
                <font-awesome-icon icon="fa-regular fa-calendar"
                    :class="[props.shownContent === 'attendance_logs' ? 'active' : '']" />
                <span>Attendance Logs</span>
            </button>
            <br>
            <button :class="['button', props.shownContent === 'exported_files' ? 'active' : '']"
                @click="emits('set-content-page', 'exported_files')">
                <font-awesome-icon icon="fa-solid fa-download"
                    :class="[props.shownContent === 'exported_files' ? 'active' : '']" />
                <span>Exported Files</span>
            </button>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    shownContent: String
});
const emits = defineEmits(['set-content-page']);
</script>