<script setup>
    import Typewriter from 't-writer.js'

    const tag = ref(null)

    const wri = () => {
        let typ = new Typewriter(tag.value, {
        loop: true,
        typeColor: 'white',
        cursorColor: 'white'
        })

        typ
        .type('Hola!, soy Alex Silva')
        .rest(6000)
        .start()
    }

    const bol = ref(false)

    onMounted(() => {
        bol.value = true
        watch(tag, () => {
        wri()
        })
    })
</script>

<template>
    <div id="about" class="w-full flex items-center border-transparent custom-height bg-gradient-to-bl from-[#0C0C0D] to-[#131B22] py-10">
        <div v-if="bol" class="w-3/4 mx-auto">
            <div class="flex flex-col justify-end text-white/80 font-bold text-center">
                <span class="mb-6 text-2xl sm:text-4xl lg:text-7xl" ref="tag"></span>
                <h2 class="text-[18px] sm:text-xl lg:text-4xl text-[#9cdcc3]">Desarrollador Web Full Stack 🚀</h2>
                <div class="font-semibold lg:text-xl mt-5 leading-10">
                    <p>
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