
import copy from 'copy-to-clipboard'

export default () => {
  const copyText = (val, callback) => {
    const result = copy(val, {
      debug: true
    })
    if (callback) {
      callback(result)
    }
    return result
  }
  return { copyText }
}
