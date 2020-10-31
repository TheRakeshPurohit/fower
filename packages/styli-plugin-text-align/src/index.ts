import { Plugin } from '@styli/core'
import { isValidPropValue } from '@styli/utils'

export const textAlign = ['textLeft', 'textCenter', 'textRight', 'textJustify']

export function isTextAlign(key: string) {
  return textAlign.includes(key) || /^textAlign$/.test(key)
}

export function textAlignPropToStyle(prop: string, propValue: any) {
  if (isValidPropValue(propValue)) return { textAlign: propValue }
  return { textAlign: prop.replace('text', '').toLowerCase() as any }
}

export default (): Plugin => {
  return {
    onVisitProp(atom) {
      if (!isTextAlign(atom.propKey)) return
      atom.style = textAlignPropToStyle(atom.propKey, atom.propValue)
      return atom
    },
  }
}