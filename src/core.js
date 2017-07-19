import EventHub from '@/eventhub'
import * as plugins from '@/plugins'

export default class Editor extends EventHub {
  constructor (el, options = {}) {
    super()
    if (!el) {
      throw new TypeError('el cannot be null')
    }

    this.el = el
    this.plugins = []
    this.content = null
    this.options = options

    this.initContent()
    this.initEvent()
    this.initInternalPlugins()
  }

  initContent () {
    this.content = document.createElement('div')
    this.content.contentEditable = true
    this.el.appendChild(this.content)
  }

  initEvent () {
    this.content.addEventListener('input', e => this.$emit('core.event.input', e.target.innerHTML))
  }

  initInternalPlugins () {
    const { donotUseInternalPlugins } = this.options
    if (!donotUseInternalPlugins) {
      Object.keys(plugins).map(k => plugins[k]).forEach(plugin => {
        this.setupPlugin(plugin)
      })
    }
  }

  setupPlugin (plugin) {
    if (plugin) {
      if (typeof plugin === 'function') {
        plugin = new plugin()
      }
      plugin.setup(this)
      this.plugins.push(plugin)
    }
  }

  runCommand (command, value) {
    document.execCommand(command, false, value)
  }
}