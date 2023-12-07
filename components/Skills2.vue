<script lang="ts" setup>
    const items = [
        {
            label: 'Frontend',
            icon: 'i-heroicons-rectangle-group',
            content: '',
            slot: 'front'
        },
        {
            label: 'Backend',
            icon: 'i-heroicons-square-3-stack-3d',
            content: '',
            slot: 'back'
        },
        {
            label: 'Base de datos',
            icon: 'i-heroicons-circle-stack',
            content: '',
            slot: 'db'
        },
        {
            label: 'Otros',
            icon: 'i-heroicons-bolt',
            content: '',
            slot: 'other'
        },
    ]

    const fronts = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Vue', 'Nuxt', 'TailwindCss', 'Bootstrap', 'Vuetify', 'Quasar', 'NuxtUI', 'PrimeVue']

    const backs = ['Node.js', 'Express.js', 'PHP', 'Laravel']

    const dbs = ['MongoDB', 'MySQL', 'Microsoft SQL Server']

    const others = ['Git', 'GitHub', 'GitLab']
</script>

<template>
    <div id="skills" class="pb-16 px-4 animation-duration-3000 animation-ease-in-out"
        v-animateonscroll="{ enterClass: 'flipleft' }">
        <h1 class="text-center font-bold text-xl lg:text-3xl mb-2">Conocimientos</h1>
        <h3 class="text-sm md:text-base lg:text-lg text-center text-gray-800 dark:text-white/80">Tecnologías que he aprendido y utilizo actualmente</h3>
        
        <UAccordion
            :items="items"
            variant="outline"
            multiple
            default-open
            class="mt-7"
        >
            <template #front="{description}">
                <div class="flex flex-wrap justify-center items-center gap-2 mb-4">
                    <div v-for="front in fronts"
                    class="w-fit border py-1 px-2 rounded-md shadow-sm shadow-white/50 border-primary">
                        {{ front }}
                    </div>
                </div>
            </template>

            <template #back="{description}">
                <div class="flex flex-wrap justify-center items-center gap-2 mb-4">
                    <div v-for="back in backs"
                    class="w-fit border py-1 px-2 rounded-md shadow-sm shadow-white/50 border-primary">
                        {{ back }}
                    </div>
                </div>
            </template>
            <template #db="{description}">
                <div class="flex flex-wrap justify-center items-center gap-2 mb-4">
                    <div v-for="db in dbs"
                    class="w-fit border py-1 px-2 rounded-md shadow-sm shadow-white/50 border-primary">
                        {{ db }}
                    </div>
                </div>
            </template>
            <template #other="{description}">
                <div class="flex flex-wrap justify-center items-center gap-2 mb-4">
                    <div v-for="other in others"
                    class="w-fit border py-1 px-2 rounded-md shadow-sm shadow-white/50 border-primary">
                        {{ other }}
                    </div>
                </div>
            </template>
        </UAccordion>
    </div>
</template>