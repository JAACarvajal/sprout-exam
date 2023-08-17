<template>
    <section class="content" v-if="props.shownContent === 'attendance_logs'">
        <header class="content_header">
            <div class="content_header_title">
                <font-awesome-icon icon="fa-regular fa-calendar" style="color: #20ad49;" />
                <span>Date Range</span>
            </div>
            <div class="content_header_buttons">
                <button>Active Logs</button>
                <button>Deleted Logs</button>
            </div>
        </header>
        <section class="content_logs">
            <div class="no_results">
                <h2>No attendance logs to show</h2>
                <p>Get started by searching for the logs</p>
            </div>
        </section>
        <section class="content_pagination">
            <div class="content_pagination_items">
                <p>Items per page</p>
                <select>
                    <option value="10" selected>10</option>
                </select>
            </div>
            <div class="content_pagination_items">
                <font-awesome-icon icon="fa-solid fa-backward-fast" />
                <font-awesome-icon icon="fa-solid fa-caret-left" />
                <span>Page</span>
                <input type="text" value="1" style="width: 40px; text-align: center;" />
                <span>of 1</span>
                <font-awesome-icon icon="fa-solid fa-forward-fast" />
                <font-awesome-icon icon="fa-solid fa-caret-right" />
            </div>
            <div class="content_pagination_items">
                <p>Showing 0 of 0</p>
            </div>
        </section>
    </section>
    <section class="content" v-if="props.shownContent === 'exported_files'">
        <header class="content_header">
            <div class="content_header_title">
                <h2>Exported Files</h2>
                <p>No file to download</p>
            </div>
        </header>
        <section class="content_logs">
            <div class="no_results">
                <h2>There are no exported items to show on your end.</h2>
                <p>Search for the logs and click <span>Export</span> to generate the file here.</p>
            </div>
        </section>
        <section class="content_pagination">
            <div class="content_pagination_items">
                <p>Items per page</p>
                <select>
                    <option value="10" selected>10</option>
                </select>
            </div>
            <div class="content_pagination_items">
                <font-awesome-icon icon="fa-solid fa-backward-fast" />
                <font-awesome-icon icon="fa-solid fa-caret-left" />
                <span>Page</span>
                <input type="text" value="1" style="width: 40px; text-align: center;" />
                <span>of 1</span>
                <font-awesome-icon icon="fa-solid fa-forward-fast" />
                <font-awesome-icon icon="fa-solid fa-caret-right" />
            </div>
            <div class="content_pagination_items">
                <p>Showing 0 of 0</p>
            </div>
        </section>
    </section>
</template>
  
<script setup>
import { ref, defineProps } from 'vue';
const props = defineProps({
    shownContent: String
});

</script>

<style scoped>
@import '../../styles/content/content.css';
</style>