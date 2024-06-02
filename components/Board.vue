<script setup lang="ts">
const rows = [8, 7, 6, 5, 4, 3, 2, 1]
const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
</script>

<template>
    <div class="flex flex-col gap-1">
        <div
            v-for="(row, y) in rows" :key="row"
            class="flex gap-1"
        >
            <div
                v-for="(col, x) in cols"
                :key="col"
                class="relative size-20 bg-slate-200"
            >
                <div
                    v-if="col === 'a'"
                    class="absolute left-2 top-1"
                >
                    {{ row }}
                </div>

                <div
                    v-if="row === 1"
                    class="absolute bottom-1 right-2"
                >
                    {{ col }}
                </div>
            </div>
        </div>
    </div>
</template>
