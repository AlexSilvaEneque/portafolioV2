<script setup lang="ts">
    import { Typewriter } from 'vue-simple-typewriter'
    import 'vue-simple-typewriter/dist/style.css'

    const data = ref<string[]>(['Desarrollador Web Full Stack'])
    
</script>

<template>
    <div id="about" class="w-full flex items-center border-transparent custom-height bg-gradient-to-bl from-[#0C0C0D] to-[#131B22] py-10">
        <div class="w-[89%] md:w-3/4 mx-auto">
            <div class="flex flex-col justify-end text-white/80 font-bold text-center">
                
                <h1 class="mb-6 text text-2xl sm:text-4xl lg:text-7xl">Hola!, soy Alex Silva</h1>
                <Typewriter
                    :words="data"
                    :loop="0"
                    :delay-speed="1500"
                    :delete-speed="90"
                    :type-speed="100"
                    :cursor="true"
                    :cursor-blinking="true"
                    :cursor-style="'|'"
                    :cursor-color="'#9cdcc3'"
                    class="text-[18px] sm:text-xl lg:text-4xl text-[#9cdcc3]"
                />
                <div class="font-semibold text-sm lg:text-xl mt-5">
                    <p class="mb-1">
                        Apasionado por crear experiencias digitales únicas y enfocadas al usuario para mejorar su interacción con la tecnología.
                    </p>
                    <p>
                        Me encuentro en constante aprendizaje y en busca de nuevos retos que me ayuden a obtener mayor experiencia dentro del mundo de la programación web.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>