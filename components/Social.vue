<script setup lang="ts">

    const socials = ref([
        {
            link: 'https://www.instagram.com/silvaenequealex',
            icon: 'instagram',
            aria: 'Visitar mi perfil de Instagram'
        },
        {
            link: 'https://www.linkedin.com/in/alexse',
            icon: 'linkedin-in',
            aria: 'Visitar mi perfil de LinkedIn'
        },
        {
            link: 'https://github.com/AlexSilvaEneque',
            icon: 'github-alt',
            aria: 'Visitar mi perfil de GitHub'
        },
    ])

</script>

<template>
    <div class="flex justify-center h-full mt-5">
        <ul class="flex items-center">
            <li v-for="item in socials" :key="item.icon" class="flex justify-center items-center bg-inherit h-10 w-10 md:h-14 md:w-14 rounded-xl cursor-pointer">
                <a :href="item.link" target="_blank" :aria-label="item.aria"
                    class="text-gray-800 dark:text-white text-xl md:text-4xl
                    hover:-rotate-45 duration-200 dark:hover:text-white/95 dark:hover:text-[#1FE0B5]">
                    <font-awesome-icon :icon="['fab' , item.icon]" />
                </a>
            </li>
        </ul>
    </div>
    <a
        href="/docs/cv_Alex_Silva.pdf"
        download
        class="border border-gray-800 text-gray-800 dark:text-white hover:border-[#04DD89] hover:text-[#04DD89] w-40 text-center py-2 rounded-md hover:cursor-pointer block mx-auto mt-5 dark:hover:bg-[#131B22] dark:hover:border-[#1FE0B5] dark:hover:text-[#1FE0B5] duration-200 ease-in"
    >
        Descargar CV
    </a>
</template>