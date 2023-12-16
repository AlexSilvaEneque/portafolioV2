<script setup lang="ts">
    const colorMode = useColorMode()

    const isDark = computed({
        get() {
            return colorMode.value === 'dark'
        },
        set() {
            colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
        }
    })

    const items = [
        [
            {
                label: 'Inicio',
                icon: 'i-heroicons-home',
                reference: 'about',
                click: () => {
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
                }
            },
            {
                label: 'Conocimientos',
                icon: 'i-heroicons-command-line',
                reference: 'skills',
                click: () => {
                    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
                }
            },
            {
                label: 'Experiencia',
                icon: 'i-heroicons-building-office',
                reference: 'work',
                click: () => {
                    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
                }
            },
            {
                label: 'Proyectos',
                icon: 'i-heroicons-briefcase',
                reference: 'projects',
                click: () => {
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }
            },
            {
                label: 'Contáctame',
                icon: 'i-heroicons-chat-bubble-bottom-center-text',
                reference: 'contact',
                click: () => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
            },
        ],
    ]

    const ui = {
        "background": "dark:bg-[#121212]",
    }

    const view = (param: string) => {

        const navbarHeight = document.getElementById('nav')!.offsetHeight
        const targetElement = document.getElementById(param)

        if (targetElement) {
            window.scroll({
                top: targetElement.offsetTop - navbarHeight,
                behavior: 'smooth'
            })
        }
    }
</script>

<template>
    <nav id="nav" class="w-full h-16 fixed lg:sticky lg:top-0 bottom-0 flex items-center justify-between px-3 backdrop-blur-[5px] z-20">
        <ClientOnly>
            <img src="/logo-amse.webp" alt="logo"
                class="w-12 h-10 lg:w-16 lg:h-12"
            />

            <div class="flex items-center gap-x-4">
                <span v-for="(item) in items[0]" @click="view(item.reference)"
                    class="hidden lg:inline hover:cursor-pointer dark:text-white/80">
                    {{ item.label }}
                </span>

                <!-- modo dark-light -->
                <UButton
                    :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
                    variant="ghost"
                    aria-label="Theme"
                    size="md"
                    @click="isDark = !isDark"
                />
                

                <!-- options menu -->
                <template class="inline lg:hidden">
                    <UDropdown :items="items" :ui="ui" :popper="{ placement: 'bottom-start' }">
                        <UButton
                            variant="ghost"
                            trailing-icon="i-heroicons-queue-list"
                        />
                    </UDropdown>
                </template>
            </div>
        </ClientOnly>
    </nav>
</template>