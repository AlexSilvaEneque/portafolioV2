<script setup lang="ts">
    import { reactive } from 'vue'
    const correo = reactive({
        name: '',
        asunto: '',
        email: '',
        msj: ''
    })

    const alerta = reactive({
        message: '',
        tipo: 'exito',
    })

    const loading = ref(false)

    const ocultar = () => {
        setTimeout(() => {
            alerta.message = ''
        }, 5000)
    }

    const enviar = async () => {

        if (Object.values(correo).includes('')) {
            alerta.tipo = 'error'
            alerta.message = 'Debe completar todos los campos!'
            ocultar()
            return
        }

        loading.value = true

        const res = await $fetch('/api/email', {
            method: 'POST',
            body: {
                ...correo
            }
        })

        loading.value = false

        if (res) {
            if (!res.status) {
                alerta.tipo = 'error'
                alerta.message = <string>res.msj
                ocultar()
                return
            }
            alerta.tipo = 'exito'
            alerta.message = <string>res.msj
            ocultar()
        }
        

        Object.assign(correo, {
            name: '',
            asunto: '',
            email: '',
            msj: ''
        })
        
    }
</script>

<template>
    <div id="contact" class="w-full bg-gradient-to-tr from-[#0C0C0D] to-[#131B22]">
        <div class="w-11/12 md:max-w-4xl mx-auto py-9 px-5">
            <h2 class="text-white text-2xl font-semibold mb-7 text-center md:text-left mt-5">Contáctame</h2>
            <p class="text-white text-[18px] text-sm md:text-lg text-center">¿Estás pensando en algún proyecto? <span class="font-bold text-[#01DC84]">No dudes</span> en dejarme un mensaje por medio del siguiente formulario o en mis redes sociales! 😎</p>
            <div class="w-full mt-8 mb-5">
                <form @submit.prevent="enviar"
                    class="flex flex-col gap-y-2 w-full md:w-[90%] mx-auto"
                    autocomplete="off"
                >
                    <div class="mb-2.5">
                        <input type="text" placeholder="Nombre"
                            v-model="correo.name"
                            class="w-full h-12 rounded-lg px-3 text-white/80 text-sm md:text-lg border bg-transparent hover:border-[#35E4D9]">
                    </div>
                    <div class="mb-2.5">
                        <input type="text" placeholder="Asunto"
                            v-model="correo.asunto"
                            class="w-full h-12 rounded-lg px-3 text-white/80 text-sm md:text-lg border bg-transparent">
                    </div>
                    <div class="mb-2.5">
                        <input type="email" placeholder="Correo electrónico"
                            v-model="correo.email"
                            class="w-full h-12 rounded-lg px-3 text-white/80 text-sm md:text-lg border bg-transparent">
                    </div>
                    <div class="mb-2.5">
                        <textarea placeholder="Escribe más información"
                            v-model="correo.msj"
                            class="w-full h-48 rounded-lg p-3 text-white/80 text-sm md:text-lg border bg-transparent"></textarea>
                    </div>
                    <UiLoadEnvio v-if="loading" />
                    <input type="submit" value="Enviar"
                        class="bg-[#131B22] text-white focus:outline-none active:outline-none mt-5 w-1/2 h-12 rounded-lg mx-auto hover:bg-[#131B22]/90 hover:cursor-pointer text-sm md:text-lg"
                        :class="{'text-white/30 pointer-events-none':loading}"
                        :disabled="loading"
                    >
                    <UiAlert v-if="alerta.message" :tipo="alerta.tipo">
                        {{ alerta.message }}
                    </UiAlert>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .mostrar {
        opacity: 1;
    }
    .ocultar {
        opacity: 0;
    }
</style>