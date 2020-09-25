import { LayoutEnum } from '~/enums/layout.enum'
import { GeneralState } from '~/models/store/general/general-state'
import { ContentSectionEnum } from '~/enums/content-section.enum'

export const state = (): GeneralState => ({
  layout: LayoutEnum.DEFAULT,
  contentSection: ContentSectionEnum.MAIN
})
