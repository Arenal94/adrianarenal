import { DeveloperState } from '~/models/store/developer/developer-state'

export default {
  commands(state: DeveloperState) {
    return state.commands
  }
}
