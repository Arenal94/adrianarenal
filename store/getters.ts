import { GeneralState } from '~/models/store/general/general-state'

export default {
  selectedLayout(state: GeneralState) {
    return state.selectedLayout
  },
  currentSection(state: GeneralState) {
    return state.currentSection
  }
}
