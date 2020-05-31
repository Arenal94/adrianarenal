import { GeneralState } from '~/models/store/general/general-state'
import { LayoutEnum } from '~/enums/theme.enum'
import { SectionEnum } from '~/enums/section.enum'

export default {
  setSelectedLayout(state: GeneralState, theme: LayoutEnum) {
    state.selectedLayout = theme
  },
  setCurrentSection(state: GeneralState, section: SectionEnum) {
    state.currentSection = section
  }
}
