<template>
    <ContentLayout>
        <template v-slot:header>
            <ContentHeader @update-display-logs="toggleLogsToDisplay" :logs-to-display="logsToDisplay"
                :shown-content="props.shownContent" />
        </template>
        <template v-slot:table>
            <LogsList :content="props.shownContent" />
        </template>
        <template v-slot:pagination>
            <Pagination />
        </template>
    </ContentLayout>
</template>
  
<script setup>
import { ref } from 'vue';
import Pagination from '../general/Pagination.vue';
import ContentLayout from '../layout/ContentLayout.vue';
import LogsList from '../general/content/LogsList.vue';
import ContentHeader from '../general/content/ContentHeader.vue';

const props = defineProps({
    shownContent: String
});
const logsToDisplay = ref('active_logs');

/**
 * Toggle between active logs and deleted logs
 * @param {*} logName 
 */
const toggleLogsToDisplay = (logName) => {
    logsToDisplay.value = logName;
}
</script>

<style>
@import '../../styles/content/content.css';
</style>