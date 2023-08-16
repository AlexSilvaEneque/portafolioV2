<script setup lang="ts">

    interface ISkills {
        name?: String
        image?: String
    }

    const props = defineProps<{
        title: String,
        skill: ISkills[]
    }>()

</script>

<template>
    <div class="mt-7">
        <h3 class="mb-4 text-gray-800 dark:text-white text-center md:text-left">{{ props.title }}</h3>
        <!-- <div class="w-full flex flex-wrap gap-2"> -->
        <div class="w-full grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-y-3">
            <div v-for="item in props.skill"
                class="flex items-center gap-x-1 rounded-md w-[8rem] p-1"
            >
                <img :src="<string>item.image" alt=""
                    class="w-8">
                <span class="font-normal text-xs text-gray-800 dark:text-white/80">
                    {{ item.name }}
                </span>
            </div>
        </div>
    </div>
</template>
