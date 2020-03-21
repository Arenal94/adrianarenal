import { DeveloperState } from '~/models/store/developer/developer-state'

export default {
  add(state: DeveloperState, command: string) {
    state.commands.push(command)
  }
}
