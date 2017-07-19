import Plugin from '@/plugin'

export default class CodePlugin extends Plugin {
  get message () {
    return 'core.plugins.code'
  }

  process () {
    const selection = document.getSelection()
    const range = selection.getRangeAt(0)
    const pre = document.createElement('pre')
    const code = document.createElement('code')
    range.surroundContents(code)
    range.surroundContents(pre)
  }
}