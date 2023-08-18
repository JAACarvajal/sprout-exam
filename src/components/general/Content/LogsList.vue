<template>
    <section class="content_logs" v-if="props.content === 'attendance_logs'">
        <div class="no_results">
            <font-awesome-icon icon="fa-regular fa-folder-open" />
            <h2>No attendance logs to show</h2>
            <p>Get started by searching for the logs</p>
        </div>
    </section>
    <section class="content_logs" v-else>
        <div class="no_results">
            <font-awesome-icon icon="fa-regular fa-folder-open" />
            <h2>There are no exported items to show on your end.</h2>
            <p>Search for the logs and click <span>Export</span> to generate the file here.</p>
        </div>
    </section>
</template>
<script setup>
const props = defineProps({
    content: String
});
</script>