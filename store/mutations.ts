import { GeneralState } from '~/models/store/general/general-state'
import { LayoutEnum } from '~/enums/theme.enum'

export default {
  setSelectedLayout(state: GeneralState, theme: LayoutEnum) {
    state.selectedLayout = theme
  }
}
