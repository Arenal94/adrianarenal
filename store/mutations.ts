import { GeneralState } from '~/models/store/general/general-state'
import { ThemeEnum } from '~/enums/theme.enum'
import { ContentSectionEnum } from '~/enums/content-section.enum'

export default {
  setTheme(state: GeneralState, theme: ThemeEnum) {
    state.theme = theme
  },
  setContentSection(state: GeneralState, contentSection: ContentSectionEnum) {
    state.contentSection = contentSection
  }
}
