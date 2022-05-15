<script lang="ts" src="./DefaultModal.ts"></script>
<style lang="scss" src="./DefaultModal.scss">
</style>
<template>
    <div class="modal-container" v-show="isVisible">
        <div class="modal">
            <div class="modal-header">
                <button @click="isVisible = !isVisible">x</button>
            </div>
            <div class="modal-body"></div>
            <div class="modal-footer"></div>
        </div>
    </div>
    <div class="backdrop" v-show="isVisible"></div>
    <!-- <dialog open>bla bla bla</dialog> -->
</template>