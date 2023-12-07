<script setup lang="ts">
  const {
    state,
    loading,
    schema,
    onSubmit
  } = useContact()

  const ui = {
    "color": {
      "white": {
        "outline": "shadow-sm bg-white dark:bg-[#121212] text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-1 focus:ring-primary-400 dark:focus:ring-primary-300"
      },
      "gray": {
        "outline": "shadow-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-1 focus:ring-primary-400 dark:focus:ring-primary-300"
      }
    },
  }
</script>

<template>
    <div id="contact" class="pb-16 px-4 animation-duration-3000 animation-ease-in-out"
      v-animateonscroll="{ enterClass: 'flipleft' }"
    >
      <h1 class="text-center font-bold text-xl lg:text-3xl mb-2">Contáctame</h1>
        <h3 class="text-sm md:text-base lg:text-lg text-center text-gray-800 dark:text-white/80 mb-7">No dudes en dejarme un mensaje por medio del siguiente formulario</h3>

      <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
        <UFormGroup name="name">
          <UInput v-model="state.name"
            :ui="ui"
            placeholder="Nombre"
            class="sm:hidden"
          />
          <UInput v-model="state.name"
            :ui="ui"
            placeholder="Nombre"
            class="hidden sm:block"
            size="xl"
          />
        </UFormGroup>

        <UFormGroup name="email">
          <UInput v-model="state.email"
            :ui="ui"
            placeholder="Correo electrónico"
            class="sm:hidden"
          />
          <UInput v-model="state.email"
            :ui="ui"
            placeholder="Correo electrónico"
            class="hidden sm:block"
            size="xl"
          />
        </UFormGroup>

        <UFormGroup name="message">
          <UTextarea variant="outline" placeholder="Detalle el asunto ..."
            v-model="state.message"
            :ui="ui"
            class="sm:hidden"
          />
          <UTextarea variant="outline" placeholder="Detalle el asunto ..."
            v-model="state.message"
            :ui="ui"
            class="hidden sm:block"
            size="xl"
          />
        </UFormGroup>
  
        <UButton
          type="submit"
          block
          label="Enviar"
          :loading="loading"
          class="sm:hidden"
        >
          <template #trailing>
            <UIcon name="i-heroicons-paper-airplane"/>
          </template>
        </UButton>

        <UButton
          type="submit"
          block
          label="Enviar"
          :loading="loading"
          class="hidden sm:block"
          size="xl"
        >
          <template #trailing>
            <UIcon name="i-heroicons-paper-airplane"/>
          </template>
        </UButton>

      </UForm>

      <LazyFooter2 />
    </div>
</template>

