<script setup lang="ts">
    const name = ref('')
    const email = ref('')
    const msj = ref('')

    const enviar = async () => {
        await $fetch('/api/email', {
            method: 'POST',
            body: {
                name: name.value,
                email: email.value,
                msj: msj.value
            }
        })
    }
</script>

<template>
    <div id="contact" class="w-full h-screen bg-gradient-to-tr from-[#0C0C0D] to-[#131B22]">
        <div class="w-3/4 mx-auto py-9">
            <h2 class="text-white text-2xl font-semibold">Contact me</h2>
            <div>
                <form @submit.prevent="enviar" action=""
                    class="flex flex-col gap-y-2">
                    <div>
                        <label for="" class="text-white">Nombre</label>
                        <input type="text" name="" id=""
                            v-model="name">
                    </div>
                    <div>
                        <label for="" class="text-white">Email</label>
                        <input type="email" name="" id=""
                            v-model="email">
                    </div>
                    <div>
                        <label for="" class="text-white">Mensaje</label>
                        <textarea name="" id="" cols="30" rows="10"
                            v-model="msj"></textarea>
                    </div>
                    <input type="submit" value="Enviar" class="bg-white">
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>