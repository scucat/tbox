// index.vue
<script lang='tsx'>
// https://blog.csdn.net/qq_45032714/article/details/117399483
import {defineComponent, onMounted} from 'vue'
import { RouterLink } from 'vue-router'
export default defineComponent({
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup(props){
    onMounted(()=>{
      console.log(props.msg)

    })
    
    return ()=>(
      <div>
        <RouterLink to={'/demo1'}>demo1</RouterLink>
      Hello { props.msg}
      </div>
    )
  }
})
</script>

