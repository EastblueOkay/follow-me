import { Render, Step } from '@follow-me/types'
import { createPopper, Instance } from '@popperjs/core'
import { createPopup, popup, content, setContent, destroy } from './popup'

function getElement(el) {
  return typeof el === 'function' ? el() : document.querySelector(el)
}

export interface RenderOptions {
  mount?: (el: Element, step: Step, index: number) => void
  unmount?: (el: Element) => void
}

export default class implements Render {
  private popperInstance: Instance
  private options: RenderOptions

  constructor(options?: RenderOptions) {
    this.options = options
  }

  render(el: Element, step: Step, index: number) {
    const { description, container } = step
    const { mount, unmount } = this.options
    if (this.popperInstance) this.popperInstance.destroy()

    console.log(`第【${index}】步：${description}`, el)
    createPopup(getElement(container))
    if (unmount && index >= 1) unmount(content)
    if (mount) mount(content, step, index)
    else setContent(description)

    this.popperInstance = createPopper(el, popup, {
      placement: 'auto',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    })
  }

  public destroy() {
    if (this.popperInstance) this.popperInstance.destroy()
    destroy()
  }
}
