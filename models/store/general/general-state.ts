import { SectionEnum, ThemeEnum } from '~/enums'

export interface GeneralState {
  theme: ThemeEnum
  section: SectionEnum
  autoScrolling: boolean
}
