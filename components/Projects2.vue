<script setup lang="ts">
    const projects = [
        {
            title: 'Quizz App',
            description: 'Aplicación de preguntas de diversos temas que pondrán a prueba tus conocimientos.',
            img: 'quizzapp.webp',
            techs: [
                { name: 'Vue' },
                { name: 'JavaScript' },
            ],
            deploy: 'https://app-quiz-amse.vercel.app'
        },
        {
            title: 'Weather App',
            description: 'Aplicación donde podrás ver el pronóstico del tiempo del día y de los posteriores.',
            img: 'weatherapp.webp',
            techs: [
                { name: 'Vue' },
                { name: 'Vuetify' },
                { name: 'JavaScript' },
            ],
            deploy: 'https://weather-app-amsedev.vercel.app'
        },
    ]
</script>

<template>
    <div id="projects" class="pb-16 px-4 animation-duration-1000 animation-ease-in-out"
        v-animateonscroll="{ enterClass: 'fadeinleft' }"
    >
        <h1 class="text-center font-bold text-xl lg:text-3xl mb-2">Proyectos</h1>
        <h3 class="text-sm md:text-base lg:text-lg text-center text-gray-800 dark:text-white/80 mb-7">Algunos proyectos que he desarrollado</h3>

        <Carousel :value="projects" :numVisible="1" :numScroll="1" :autoplayInterval="5000">
            <template #item="slotProps">
                <div class="border dark:border-gray-700 rounded-lg py-3 px-2 sm:px-4 sm:py-5 md:px-5 md:py-8">
                    <div class="mb-3 sm:hidden">
                        <img :src="'/img/' + slotProps.data.img" :alt="slotProps.data.title" class="w-full aspect-[3/3] object-cover shadow-2 rounded-tl-md rounded-tr-md" />
                    </div>
                    <div class="space-y-2 text-left">
                        <h4 class="text-base sm:text-lg font-semibold dark:text-white/90">{{ slotProps.data.title }}</h4>
                        <div class="flex flex-wrap gap-1">
                            <UBadge v-for="tech in slotProps.data.techs"
                                variant="soft"
                            >
                                {{ tech.name }}
                            </UBadge>
                        </div>
                        <h6 class="text-xs sm:text-sm leading-4 dark:text-white/80">{{ slotProps.data.description }}</h6>
                        
                        <div class="mt-5 flex align-items-center justify-content-center gap-2">
                            <UButton label="Demo"
                                :to="slotProps.data.deploy"
                                target="_blank"
                                icon="i-heroicons-arrow-top-right-on-square"
                            />
                        </div>
                    </div>
                </div>
            </template>
        </Carousel>
    </div>
</template>