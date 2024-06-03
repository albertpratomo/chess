<script setup lang="ts">
interface Props {
    squares: string[]
}

defineProps<Props>()
</script>

<template>
    <ul class="rounded bg-stone-900 p-4 text-stone-200 font-medium">
        <h2 class="mb-2">
            Click list
        </h2>

        <li
            v-for="(square, i) in squares"
            :key="i"
            class="mt-.5 flex gap-1 text-sm"
        >
            <div class="min-w-8 text-stone-400">
                {{ i + 1 }}.
            </div>

            <div>
                {{ square }}
            </div>
        </li>
    </ul>
</template>
