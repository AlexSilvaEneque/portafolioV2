<script setup lang="ts">
    import { Typewriter } from 'vue-simple-typewriter'
    import 'vue-simple-typewriter/dist/style.css'

    const data = ref<string[]>(['Desarrollador Web Full Stack'])
    
</script>

<template>
    <div id="about" class="w-full flex items-center border-transparent custom-height bg-gradient-to-bl from-[#0C0C0D] to-[#131B22] py-10">
        <div class="w-11/12 md:max-w-4xl mx-auto px-3">
            <div class="flex flex-col justify-end text-white font-bold">
                
                <h1 class="mb-6 text text-2xl sm:text-4xl lg:text-7xl text-center">Hola!, soy <span class="text-transparent bg-clip-text bg-gradient-to-l from-[#01DC84] to-[#35E4D9]">Alex Silva</span></h1>
                <Typewriter
                    :words="data"
                    :loop="0"
                    :delay-speed="1500"
                    :delete-speed="90"
                    :type-speed="100"
                    :cursor="true"
                    :cursor-blinking="true"
                    :cursor-style="'|'"
                    :cursor-color="'#03DD87'"
                    class="text-[18px] sm:text-xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-l from-[#04DD89] to-[#35E4D9] text-center"
                />
                <div class="font-semibold text-sm lg:text-lg mt-5 text-center">
                    <p class="mb-1">
                        Apasionado por crear experiencias digitales únicas y enfocadas al usuario para mejorar su interacción con la tecnología.
                    </p>
                    <p>
                        Me encuentro en constante aprendizaje y en busca de nuevos retos que me ayuden a obtener mayor experiencia dentro del mundo de la programación web.
                    </p>
                </div>

                <Social />
            </div>
        </div>
    </div>
</template>