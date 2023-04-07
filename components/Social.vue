<script setup lang="ts">
    import { Ref } from "vue"

    const socials = ref([
        { link: 'https://www.instagram.com/silvaenequealex', icon: 'fa-brands fa-instagram' },
        { link: 'https://www.linkedin.com/in/alexse', icon: 'fa-brands fa-linkedin-in' },
        { link: 'https://github.com/AlexSilvaEneque', icon: 'fa-brands fa-github-alt' },
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
                        <a :href="item.link" target="_blank" class="text-white/80 text-xl md:text-3xl
                            hover:-rotate-45 duration-200 hover:text-white/95">
                            <font-awesome-icon :icon="item.icon" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
</template>