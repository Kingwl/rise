import Plugin from '@/plugin'

export default class LinkPlugin extends Plugin {
  get message () {
    return 'core.plugins.link'
  }

  process (link, text) {
    const anchorNode = document.createElement('a')
    const textNode = document.createTextNode(text)
    anchorNode.src = link
    anchorNode.appendChild(textNode)
    const selection = document.getSelection()
    const range = selection.getRangeAt(0)
    range.insertNode(anchorNode)
  }
}