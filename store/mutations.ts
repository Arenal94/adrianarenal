import { GeneralState } from '~/models/store/general/general-state'
import { LayoutEnum } from '~/enums/layout.enum'
import { ContentSectionEnum } from '~/enums/content-section.enum'

export default {
  setLayout(state: GeneralState, theme: LayoutEnum) {
    state.layout = theme
  },
  setContentSection(state: GeneralState, section: ContentSectionEnum) {
    state.contentSection = section
  }
}
