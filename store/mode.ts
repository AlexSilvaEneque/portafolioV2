import { reactive } from 'vue'

const useModeStore = reactive({
    mode: true
})
/** true --> light
 * false --> dark
 */

export default useModeStore