import { defineStore } from 'pinia'

export default defineStore('stylesViewer', {
  state: () => ({
    valueClipboard: ''
  }),
  actions: {
    setValueClipboard(value: string): void {
      this.valueClipboard = value
    }
  }
  // example
  // getters: {
  //   upper(): string {
  //     return this.valueClipboard.toUpperCase()
  //   }
  // }
})
