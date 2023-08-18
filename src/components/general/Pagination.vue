<template>
    <section class="content_pagination">
        <div class="content_pagination_items">
            <p>Items per page</p>
            <select>
                <option value="10" selected>10</option>
            </select>
        </div>
        <div class="content_pagination_items pagination">
            <font-awesome-icon icon="fa-solid fa-backward-fast" />
            <font-awesome-icon icon="fa-solid fa-caret-left" />

            <span>Page</span>
            <input type="text" value="1" />
            <span>of 1</span>

            <font-awesome-icon icon="fa-solid fa-caret-right" />
            <font-awesome-icon icon="fa-solid fa-forward-fast" />
        </div>
        <div class="content_pagination_items">
            <p>Showing 0 of 0</p>
        </div>
    </section>
</template>