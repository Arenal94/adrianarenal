import { GeneralState } from '~/models/store/general/general-state'

export default {
  theme(state: GeneralState) {
    return state.theme
  },
  contentSection(state: GeneralState) {
    return state.contentSection
  }
}
