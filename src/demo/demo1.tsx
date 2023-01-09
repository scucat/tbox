// index.tsx
import { defineComponent } from 'vue'
export default defineComponent({
  props:{
    msg:{
      type:String,
      default:'haha'
    }
  },
  setup(props) {
    return () => (
      <div>
        Hello demo1 {props.msg}
      </div>
    )
  }
})
