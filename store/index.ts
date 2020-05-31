import { LayoutEnum } from '~/enums/theme.enum'
import { GeneralState } from '~/models/store/general/general-state'
import { SectionEnum } from '~/enums/section.enum'

export const state = (): GeneralState => ({
  selectedLayout: LayoutEnum.DEFAULT,
  currentSection: SectionEnum.MAIN
})
