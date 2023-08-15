<template>
    <nav class="navigation-bar">
        <!-- LOGO -->
        <div class="logo">
            <img class="logo_img" src="../../assets/logo.png" alt="Sprout Solutions Logo" srcset="">
            <div class="logo_text">
                <h1>HR</h1>
            </div>
        </div>

        <!-- DROPDOWN -->
        <div class="dropdown">
            <a class="dropdown_item" href="#">My Request</a>
            <a class="dropdown_item" href="#">My Team</a>
            <a class="dropdown_item" href="#">Company</a>
            <a class="dropdown_item" href="#">Administration Tools</a>
            <a class="dropdown_item" href="#">Maintenance</a>
        </div>

        <!-- SEARCH -->
        <div class="search">
            <input class="search_input" type="text" placeholder="Search Employee...">
        </div>
        <div class="user">
            <div class="user_icon"></div>
            <div class="user_name">Admin</div>
        </div>
    </nav>
</template>

<script setup>
</script>

<style scoped>
@import '../../styles/general/NavigationBar/index.css';
</style>