<script setup lang="ts">
const rows = [8, 7, 6, 5, 4, 3, 2, 1]
const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

const style = {
    '--dark': '#739552',
    '--light': '#eaebcf',
    '--highlight': 'rgba(255, 255, 51, 0.5)',
}

function getColor(x: number, y: number) {
    return (x + y) % 2 === 0
        ? 'bg-[--light] text-[--dark]'
        : 'bg-[--dark] text-[--light]'
}

const lastClickedSquare = ref('')

function onClick(square: string) {
    lastClickedSquare.value = square
}
</script>

<template>
    <div :style="style">
        <div
            v-for="(row, y) in rows" :key="row"
            class="flex"
        >
            <div
                v-for="(col, x) in cols"
                :key="col"
                class="relative size-20 cursor-pointer font-bold"
                :class="getColor(x, y)"
                @click="onClick(`${col}${row}`)"
            >
                <span
                    v-if="col === 'a'"
                    class="absolute left-2 top-1"
                >
                    {{ row }}
                </span>

                <span
                    v-if="row === 1"
                    class="absolute bottom-1 right-2"
                >
                    {{ col }}
                </span>

                <div
                    v-if="lastClickedSquare === `${col}${row}`"
                    class="size-full bg-[--highlight]"
                />
            </div>
        </div>
    </div>
</template>
