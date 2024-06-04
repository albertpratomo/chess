<script setup lang="ts">
const model = defineModel<string>()

const themes = ['Green', 'Brown', 'Purple']
</script>

<template>
    <div>
        <h3 class="text-stone-200 font-medium">
            Theme
        </h3>

        <select
            v-model="model"
            class="rounded bg-transparent text-stone-200"
        >
            <option
                v-for="(theme, i) in themes"
                :key="i"
                :value="theme"
            >
                {{ theme }}
            </option>
        </select>
    </div>
</template>
