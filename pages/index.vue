<script setup lang="ts">
const clickedSquares = ref<string[]>([])

function onSquareClick(square: string) {
    clickedSquares.value.push(square)
}
</script>

<template>
    <div class="grid gap-4 sm:grid-cols-[1fr_200px]">
        <Board @square-click="onSquareClick" />

        <ClickList :squares="clickedSquares" />
    </div>
</template>
