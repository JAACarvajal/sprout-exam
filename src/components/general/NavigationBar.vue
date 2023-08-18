<template>
    <nav class="navigation-bar">
        <!-- LOGO -->
        <div class="logo">
            <img class="logo_img" src="../../assets/logo.png" alt="Sprout Solutions Logo" srcset="">
            <div class="logo_text">
                <p>HR</p>
            </div>
        </div>

        <!-- DROPDOWN -->
        <div class="dropdown">
            <a class="dropdown_item" href="#">My Request<font-awesome-icon icon="fa-solid fa-caret-down" /></a>
            <a class="dropdown_item" href="#">My Team<font-awesome-icon icon="fa-solid fa-caret-down" /></a>
            <a class="dropdown_item" href="#">Company<font-awesome-icon icon="fa-solid fa-caret-down" /></a>
            <a class="dropdown_item" href="#">Administration Tools<font-awesome-icon icon="fa-solid fa-caret-down" /></a>
            <a class="dropdown_item" href="#">Maintenance<font-awesome-icon icon="fa-solid fa-caret-down" /></a>
        </div>

        <!-- SEARCH -->
        <div class="search">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            <input class="search_input" type="text" placeholder="Search Employee...">
        </div>
        <div class="user">
            <div class="user_icon"></div>
            <div class="user_name">Admin<font-awesome-icon icon="fa-solid fa-caret-down" /></div>
        </div>
    </nav>
</template>

<script setup>
</script>

<style scoped>
@import '../../styles/general/navigation-bar.css';
</style>