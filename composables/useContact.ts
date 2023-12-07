import { z } from 'zod'
import type { FormSubmitEvent } from '#ui/types'

export default function useContact() {
    const state = reactive({
        name: undefined,
        email: undefined,
        message: undefined
    })

    const loading = useState<boolean>('loading', () => false)

    
    const schema = z.object({
        name: z.string({ required_error: 'El campo es obligatorio' }),
        email: z.string({ required_error: 'El campo es obligatorio' }).email('Dirección email incorrecta'),
        message: z.string({ required_error: 'El campo es obligatorio' })
    })

    type Schema = z.output<typeof schema>

    const toast = useToast()

    const initState = () => {
        state.name = undefined
        state.email = undefined
        state.message = undefined
        loading.value = false
    }

    const onSubmit = async (event: FormSubmitEvent<Schema>) => {
        loading.value = true
        const { data } = await useFetch('/api/email', {
            method: 'POST',
            body: {
                ...event.data
            }
        })
        initState()
        toast.add({ title: <string>data.value!.msj })
    }

    return {
        state,
        loading,
        schema,
        onSubmit
    }
}