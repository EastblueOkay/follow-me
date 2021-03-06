import type { ReactNode } from 'react'
import { Manual } from '@follow-me/types'
import type { Value as I18nValue } from './utils/i18n'

export interface Theme {
  primaryColor?: string
  width?: string | number
  fontSize?: string | number
  boxShadow?: string
  borderRadius?: string | number
  borderColor?: string
  edge?: string | number
  padding?: sstring | number
  textColor?: string
  itemBackground?: string
  transitionDuration?: number
  transitionTimingFunction?: string
  background?: string
}

export interface Props {
  visible?: boolean
  onClose?: () => void
  data: Manual[]
  /** 自定义主题 */
  theme?: Theme
  locale?: I18nValue
}

export interface ModalProps extends Pick<Props, 'visible' | 'onClose'> {
  children?: ReactNode
}
