import { MediaState } from '~/models/store/media/media.state'

export default {
  setViewportWidth(state: MediaState, viewportWidth: number): void {
    state.viewportWidth = viewportWidth
  }
}
