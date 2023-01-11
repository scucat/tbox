<script setup lang="ts">
import { ref } from 'vue';
import monacoEditor from './monacoEditor.vue'

const value = ref('-- select * from infrastructure;')
const language = ref('html')
const hightChange = ref<any>(true)
const editorMounted = (editor: any) => {
    console.log('editor实例加载完成', editor)
}
</script>
<template>
    <div class="wh100" >
        <monacoEditor v-model="value" :language="language" :hight-change="hightChange" 
            width="100%" height="100%" theme="vs-dark" @editor-mounted="editorMounted" />
    </div>
</template>


