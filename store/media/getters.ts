import { MediaState } from '~/models/store/media/media.state'

import { DeviceEnum } from '~/enums'

export default {
  device(state: MediaState): DeviceEnum {
    if (state.viewportWidth >= 1920) {
      return DeviceEnum.LARGE_DESKTOP
    }
    if (state.viewportWidth >= 1200) {
      return DeviceEnum.DESKTOP
    }
    if (state.viewportWidth >= 1024) {
      return DeviceEnum.SMALL_DESKTOP
    }
    if (state.viewportWidth >= 768) {
      return DeviceEnum.TABLET
    }
    if (state.viewportWidth >= 426) {
      return DeviceEnum.SMALL_TABLET
    }
    return DeviceEnum.MOBILE
  }
}
