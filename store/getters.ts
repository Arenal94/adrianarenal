import { GeneralState } from '~/models/store/general/general-state'

export default {
  layout(state: GeneralState) {
    return state.layout
  },
  contentSection(state: GeneralState) {
    return state.contentSection
  }
}
