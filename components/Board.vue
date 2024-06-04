<script setup lang="ts">
interface Props {
    theme: 'Green' | 'Brown' | 'Purple'
}

const props = defineProps<Props>()

const emit = defineEmits<{
    squareClick: [square: string]
}>()

const style = computed(() => {
    const themes = {
        Green: {
            '--dark': '#739552',
            '--light': '#eaebcf',
            '--highlight': 'rgba(255, 255, 51, 0.5)',
        },
        Brown: {
            '--dark': '#805431',
            '--light': '#c29a60',
            '--highlight': 'rgba(168, 88, 50, 0.5)',
        },
        Purple: {
            '--dark': '#8477ba',
            '--light': '#f0f1f0',
            '--highlight': 'rgba(183, 206, 221, 0.5)',
        },
    }

    return themes[props.theme]
})

const rows = [8, 7, 6, 5, 4, 3, 2, 1]
const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

function getColor(x: number, y: number) {
    return (x + y) % 2 === 0
        ? 'bg-[--light] text-[--dark]'
        : 'bg-[--dark] text-[--light]'
}

const lastClickedSquare = ref('')

function onSquareClick(square: string) {
    lastClickedSquare.value = square

    emit('squareClick', square)
}
</script>

<template>
    <div
        :style="style"
        class="overflow-hidden rounded"
    >
        <div
            v-for="(row, y) in rows" :key="row"
            class="flex"
        >
            <div
                v-for="(col, x) in cols"
                :key="col"
                class="relative aspect-square w-1/8 cursor-pointer font-bold"
                :class="getColor(x, y)"
                role="cell"
                :aria-label="`Square ${col}${row}`"
                @click="onSquareClick(`${col}${row}`)"
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
                    role="mark"
                    :aria-label="`Highlight ${col}${row}`"
                    class="size-full bg-[--highlight]"
                />
            </div>
        </div>
    </div>
</template>
