import { lstat } from 'node:fs/promises'
import { cwd } from 'node:process'
import { ipcRenderer } from 'electron'
import path from 'node:path'
import Store from 'electron-store'

ipcRenderer.on('main-process-message', (_event, ...args) => {
  console.log('[Receive Main-process message]:', ...args)
})

export function getAppDir() {
  return cwd()
}

export function getDbPath() {
  var appDir = cwd()
  var dbPath = path.join(appDir, 'resource/database/main.db')
  return dbPath
}

export function _lstat(path_: string) {
  lstat(path_).then(stats => {
    console.log('[fs.lstat]', stats)
  }).catch(err => {
    console.error(err)
  })
}


// https://zhuanlan.zhihu.com/p/524511910
// 初始化 store
const store = new Store({
  // 版本更新初始化
  migrations: {
    '>=0.3.0': (store) => {
      store.clear()
    },
  },
})

// 获取存储值
export const cget = (node:string, key:string, def:any) => {
  const value = store.get(node + '.' + key)
  return value === undefined ? def : value
}

// 设置存储值
export const cset = (node:string, key:string, value:any) => {
  return store.set(node + '.' + key, value)
}