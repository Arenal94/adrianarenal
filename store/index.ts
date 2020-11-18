import { GeneralState } from '~/models/store/general/general-state'

import { SectionEnum, ThemeEnum } from '~/enums'

export const state = (): GeneralState => ({
  theme: ThemeEnum.DESIGNER,
  section: SectionEnum.INTRO
})
