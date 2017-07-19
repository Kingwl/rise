import Plugin from '@/plugin'

export default class ImagePlugin extends Plugin {
  get message () {
    return 'core.plugins.image'
  }

  process (src) {
    this.editor.runCommand('insertImage', src)
  }
}