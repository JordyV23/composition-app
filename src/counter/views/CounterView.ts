//Cuando se trate de mas de 20 lineas, utilizar la forma tradicional
import { defineComponent,ref } from 'vue';
export default defineComponent({
    setup(){
     
        const counter = ref(5);

        const increase = () => {
            counter.value++;
        }
        const decrease = () => {
            counter.value--;
        }

        return {
            counter,
            increase,
            decrease
        }
        
    }
})
