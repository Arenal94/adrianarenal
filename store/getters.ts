import { GeneralState } from '~/models/store/general/general-state'

import { SectionEnum, ThemeEnum } from '~/enums'

export default {
  theme(state: GeneralState): ThemeEnum {
    return state.theme
  },
  section(state: GeneralState): SectionEnum {
    return state.section
  },
  autoScrolling(state: GeneralState): boolean {
    return state.autoScrolling
  }
}
