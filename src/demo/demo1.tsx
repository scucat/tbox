// index.tsx
import { defineComponent, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { _lstat, getAppDir, getDbPath } from '../samples/node-api'
import { cget, cset } from '../samples/node-api'

export default defineComponent({
  props: {
    msg: {
      type: String,
      default: 'haha'
    }
  },
  setup(props) {
    onMounted(()=>{
      var v2 = get('version',null)
      console.log("取出version mounted",v2)
    })

    function handleClik() {

      var s = getDbPath()
      console.log(s)
      _lstat(s)
      var v = process.versions.electron
      console.log(v)
      set('version',v)
      var v2 = get('version',null)
      console.log("取出version",v2)
    }
    // 信息获取
    const get = (key:string, def:any) => {
      return cget('github', key, def)
    }

    // 信息保存
    const set = (key:string, value:any) => {
      return cset('github', key, value)
    }
    return () => (
      <div>
        <RouterLink to={'/demo2'}>demo2</RouterLink>
        Hello demo1 {props.msg}
        <button onClick={handleClik}>clike me</button>

      </div>
    )
  }
})
