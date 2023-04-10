<script setup lang="ts">
    import { Ref } from "vue"

    const socials = ref([
        {
            link: 'https://www.instagram.com/silvaenequealex',
            icon: 'instagram',
            aria: 'Visitar mi perfil de Instagram'
        },
        {
            link: 'https://www.linkedin.com/in/alexse',
            icon: 'linkedin-in',
            aria: 'Visitar mi perfil de LinkedIn'
        },
        {
            link: 'https://github.com/AlexSilvaEneque',
            icon: 'github-alt',
            aria: 'Visitar mi perfil de GitHub'
        },
    ])
    const width : Ref<number> = ref(0)
    const show : Ref<boolean> = ref(false)
    
    const checkScreen = () => {
        width.value = window.innerWidth
        
        if (width.value >= 768) {
            show.value = true
        } else {
            show.value = false
        }
    }

    onMounted(() => {
        checkScreen()
        window.addEventListener('resize', checkScreen)
    })

</script>

<template>
        <div v-if="show" 
            class="w-20 h-screen fixed top-0">
            <div class="flex flex-col justify-center h-full">
                <ul class="py-5 bg-[#131B22] rounded-tr-3xl rounded-bl-3xl flex flex-col items-center">
                    <li v-for="item in socials" :key="item.icon" class="flex justify-center items-center bg-inherit h-10 w-10 md:h-14 md:w-14 rounded-xl cursor-pointer">
                        <a :href="item.link" target="_blank" :aria-label="item.aria"
                            class="text-white/80 text-xl md:text-3xl
                            hover:-rotate-45 duration-200 hover:text-white/95">
                            <font-awesome-icon :icon="['fab' , item.icon]" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
</template>

<!-- solo con agregar :aria-label me da 100 en accesibilidad -->