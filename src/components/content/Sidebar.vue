<template>
    <section class="sidebar">
        <div class="sidebar_section sidebar_header">
            <h1 class="sidebar_header_title">Manage Attendance</h1>
            <p class="sidebar_header_description">Attendance management is where you can generate, add, edit, and export the
                logs of the
                employees.</p>
            <div class="sidebar_header_actions">
                <button class="button active">Attendance Logs</button>
                <br>
                <button class="button">Exported Files</button>
            </div>
        </div>
        <div class="sidebar_section sidebar_filter">
            <h4>DATE RANGE</h4>
        </div>
        <div class="sidebar_section sidebar_action">
            <button>
                Search
            </button>
            <button>
                Export
            </button>
        </div>
    </section>
</template>
  
<script setup>
</script>

<style scoped>
@import '../../styles/content/Sidebar/index.css';
</style>