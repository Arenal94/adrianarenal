import { LayoutEnum } from '~/enums/theme.enum'
import { GeneralState } from '~/models/store/general/general-state'

export const state = (): GeneralState => ({
  selectedLayout: LayoutEnum.DEFAULT
})
