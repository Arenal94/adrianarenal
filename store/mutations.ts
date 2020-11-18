import { GeneralState } from '~/models/store/general/general-state'

import { ThemeEnum, SectionEnum } from '~/enums'

export default {
  setTheme(state: GeneralState, theme: ThemeEnum): void {
    state.theme = theme
  },
  setSection(state: GeneralState, section: SectionEnum): void {
    state.section = section
  }
}
