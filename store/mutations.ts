import { GeneralState } from '~/models/store/common/general-state'
import { LayoutEnum } from '~/enums/theme.enum'

export default {
  setSelectedLayout(state: GeneralState, theme: LayoutEnum) {
    state.selectedLayout = theme
  }
}
