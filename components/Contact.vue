<script setup lang="ts">
    const name = ref('')
    const email = ref('')
    const msj = ref('')

    const emer = ref(false)
    const display = ref('')
    const loading = ref(false)

    const enviar = async () => {
        loading.value = true

        const res = await $fetch('/api/email', {
            method: 'POST',
            body: {
                name: name.value,
                email: email.value,
                msj: msj.value
            }
        })

        loading.value = false

        name.value = ''
        email.value = ''
        msj.value = ''

        if (res) {
            emer.value = true
            display.value = <string>res.msj
            setTimeout(() => {
                emer.value = false
            }, 2000)
        }
        
    }
</script>

<template>
    <div id="contact" class="w-full min-h-screen bg-gradient-to-tr from-[#0C0C0D] to-[#131B22]">
        <div class="w-3/4 mx-auto py-9">
            <h2 class="text-white text-2xl font-semibold mb-7 text-center md:text-left">Contáctame</h2>
            <p class="text-white/80 text-[18px] text-sm md:text-lg text-center">¿Estás pensando en algún proyecto que se ajusten a mis conocimientos? <span class="font-bold text-white/95">No dudes</span> en dejarme un mensaje por medio del siguiente formulario o en mis redes sociales! 😎</p>
            <div class="w-full mt-8">
                <form @submit.prevent="enviar"
                    class="flex flex-col gap-y-2 w-full md:w-[90%] mx-auto">
                    <div class="mb-2">
                        <input type="text" placeholder="Nombre"
                            v-model="name"
                            class="w-full h-12 rounded-lg px-3 text-white/80 text-sm md:text-lg border bg-transparent">
                    </div>
                    <div class="mb-2">
                        <input type="email" placeholder="Correo electrónico"
                            v-model="email"
                            class="w-full h-12 rounded-lg px-3 text-white/80 text-sm md:text-lg border bg-transparent">
                    </div>
                    <div class="mb-2">
                        <textarea placeholder="Mensaje"
                            v-model="msj"
                            class="w-full h-48 rounded-lg p-3 text-white/80 text-sm md:text-lg border bg-transparent"></textarea>
                    </div>
                    <input type="submit" value="Enviar"
                        class="bg-[#131B22] text-white focus:outline-none active:outline-none w-1/2 h-12 rounded-lg mx-auto
                            hover:bg-[#131B22]/90 hover:cursor-pointer text-sm">
                </form>
                <p v-if="emer"
                    class="text-white">
                    {{ display }}
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>