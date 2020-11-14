import { ActionContext } from 'vuex'

import { MediaState } from '~/models/store/media/media.state'
import { MEDIA_CONSTS } from '~/models/store/media/media.consts'

export default {
  setViewportWidth(
    { commit }: ActionContext<MediaState, any>,
    viewportWidth: number
  ): void {
    commit(MEDIA_CONSTS.mutations.setViewportWidth, viewportWidth)
  }
}
