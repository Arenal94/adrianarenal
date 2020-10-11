import { ThemeEnum } from '~/enums/theme.enum'
import { GeneralState } from '~/models/store/general/general-state'
import { ContentSectionEnum } from '~/enums/content-section.enum'

export const state = (): GeneralState => ({
  theme: ThemeEnum.DESIGNER,
  contentSection: ContentSectionEnum.MAIN
})
