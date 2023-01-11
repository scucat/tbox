import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  props: {
    msg: {
      type: String,
      default: 'haha'
    }
  },
  setup(props) {
    onMounted(()=>{
    })

    return () => (
      <div>
        today
      </div>
    )
  }
})
