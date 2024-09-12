<script setup lang="ts">
    const links = [
        'https://www.linkedin.com/in/alexse/',
        'https://github.com/AlexSilvaEneque',
    ]

    const gotToSocial = (param: number) => {
        window.open(links[param], '_blank')
    }
</script>

<template>
    <div id="about" class="px-4 space-y-4 h-screen flex flex-col justify-center">
        <!-- about header -->
        <div class="flex flex-col items-center space-y-1 lg:space-y-4">
            <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary/90">Hola! soy Alex Silva</h1>
            <h2 class="md:text-xl lg:text-2xl font-semibold text-green-500 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t dark:from-green-600 dark:to-green-100">
                Desarrollador Web Full Stack
            </h2>

            <div class="text-xs sm:text-sm lg:text-[16px] text-center leading-6">
                <p>
                    Apasionado por crear experiencias digitales únicas y enfocadas al usuario.
                    Con más de un año de experiencia creando aplicaciones web.
                </p>
            </div>
        </div>

        <!-- about contact -->
        <div class="text-gray-700 dark:text-slate-300">
            <div class="flex justify-center items-center">
                <IconsLinkedin @click="gotToSocial(0)" />
                <IconsGithub @click="gotToSocial(1)" />
            </div>
            
            <a href="/docs/cv_Alex_Silva.pdf"
                download
                class="mt-4 block w-fit mx-auto rebote"
            >
                <UButton
                    label="Descargar CV"
                    variant="outline"
                    class="text-gray-700 md:hidden"
                />
                <UButton
                    label="Descargar CV"
                    variant="outline"
                    class="text-gray-700 hidden md:inline-block lg:hidden"
                    size="lg"
                />
                <UButton
                    label="Descargar CV"
                    variant="outline"
                    class="text-gray-700 hidden lg:inline-block"
                    size="xl"
                />
            </a>
        </div>

    </div>
</template>

<style scoped>
    .rebote {
        animation: bounce 1.5s infinite backwards;
    }
    @keyframes bounce {
        0%, 100% {
            transform: translateY(-5px);
        }
        50% {
            transform: translateY(-8px);
        }
    }
</style>