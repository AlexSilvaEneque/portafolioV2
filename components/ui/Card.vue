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
        <h3 class="mb-4 text-white text-center md:text-left">{{ props.title }}</h3>
        <div class="w-full flex flex-wrap justify-center lg:justify-start gap-4">
            <div v-for="item in props.skill"
                class="w-28 md:w-32 shadow-sm bg-[#131B22]/70 rounded-md py-2">
                <img :src="<string>item.image" :alt="<string>item.name"
                    class="w-14 aspect-[3/2] object-contain mx-auto">
                <p class="text-center text-white/80 mt-2 font-semibold text-xs md:text-sm">
                    {{ item.name }}
                </p>
            </div>
        </div>
    </div>
</template>
