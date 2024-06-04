<script setup lang="ts">
const clickedSquares = ref<string[]>([])

function onSquareClick(square: string) {
    clickedSquares.value.push(square)
}
</script>

<template>
    <main class="grid grid-rows-[min-content_min-content] min-h-screen gap-4 bg-stone-800 p-4 md:grid-cols-[minmax(min-content,calc(100vh-2rem))_200px] md:grid-rows-1">
        <Board @square-click="onSquareClick" />

        <ClickList :squares="clickedSquares" />
    </main>
</template>
