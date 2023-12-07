<script setup lang="ts">
    const experience = ref([
        {
            status: 'Programador Web Full Stack',
            company: 'Freelancer',
            description: 'Diseño y desarrollo de proyectos. Durante este tiempo logré reforzar mis conocimientos, así como aprender nuevas tecnologías.',
            icon: 'i-heroicons-light-bulb'
        },
        {
            status: 'Programador Web Full Stack',
            company: 'FMSAC',
            description: 'Desarrollo y mantenimiento de módulos de diferentes aplicaciones web. Trabajé con tecnologías como HTML, CSS, JavaScript, PHP, Bootstrap y MySQL.',
            icon: 'i-heroicons-briefcase'
        }
    ])

    const ui = {
        "background": "dark:bg-[#121212]",
        "divide": "divide-y divide-gray-50 dark:divide-gray-200 dark:divide-[#121212]",
        "body": {
            // "padding": "px-4 py-1"
        },
        "header": {
            "padding": "lg:px-4 lg:py-3"
        },
    }
</script>

<template>
    <div id="work" class="pb-16 px-4 animation-duration-1000 animation-ease-in-out"
        v-animateonscroll="{ enterClass: 'fadeinleft' }"
    >
        <h1 class="text-center font-bold text-xl lg:text-3xl mb-2">Experiencia</h1>
        <h3 class="text-sm md:text-base lg:text-lg text-center text-gray-800 dark:text-white/80 mb-7">Mi trayectoria laboral hasta la actualidad</h3>

        <div class="space-y-5 md:hidden">
            <UCard :ui="ui"
                v-for="xp in experience"
            >
                <template #header>
                    <h2 class="font-semibold">
                        {{ xp.status }}
                    </h2>
                    <h3 class="text-sm font-light text-primary/90">{{ xp.company }}</h3>
                </template>
                
                <p class="text-xs leading-5">
                    {{ xp.description }}
                </p>
            </UCard>
        </div>

        <Timeline :value="experience" align="alternate" class="customized-timeline hidden md:block">
            
            <template #marker="slotProp">
                <span>
                    <UIcon :name="slotProp.item.icon" class="text-3xl" />
                </span>
            </template>

            
            <template #content="slotProp">
                <UCard :ui="ui">
                    <template #header>
                        <h1 class="dark:text-white/90 font-semibold">{{ slotProp.item.status }}</h1>
                        <span class="text-sm text-primary/80 font-light">{{ slotProp.item.company }}</span>
                    </template>

                    <p class="text-sm leading-6 font-light">{{ slotProp.item.description }}</p>
                </UCard>
            </template>
        </Timeline>
    </div>
    
</template>