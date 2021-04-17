import { StyliPlugin } from '@styli/types'
import { kebab } from '@styli/utils'

function isMatch(key: string) {
  return /^box(Sizing|Content|Border)$/i.test(key)
}

export default (): StyliPlugin => {
  return {
    isMatch,
    handleAtom(atom) {
      let v: string = ''
      const { key, value } = atom
      if (key === 'boxSizing') v = value
      if (key === 'boxBorder') v = 'border-box'
      if (key === 'boxContent') v = 'content-box'
      atom.style = { boxSizing: kebab(v) as any }
      return atom
    },
  }
}
