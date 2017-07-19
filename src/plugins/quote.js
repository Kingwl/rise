import Plugin from '../plugin'

export default class QuotePlugin extends Plugin {
  get message () {
    return 'core.plugins.quote'
  }

  process () {
    this.editor.runCommand('formatBlock', 'BLOCKQUOTE')
  }
}