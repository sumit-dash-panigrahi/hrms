<script lang="ts" src="./DefaultLayout.ts"></script>
<style lang="scss" src="./DefaultLayout.scss">
</style>
<template>
    <DefaultSidebar />
    <div class="main-wrapper">
        <DefaultHeader />
        <!-- <DefaultNav /> -->
        <slot name="main">
            <div class="main"> Default Main No Content</div>
        </slot>
        <footer></footer>
        <DefaultModal />
    </div>
</template>