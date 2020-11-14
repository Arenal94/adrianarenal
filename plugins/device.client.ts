import { MEDIA_CONSTS } from '~/models/store/media/media.consts'

window.addEventListener('resize', function() {
  this.$nuxt.$store.dispatch(
    `${MEDIA_CONSTS.moduleName}/${MEDIA_CONSTS.actions.setViewportWidth}`,
    window.innerWidth
  )
})

export default async (context, inject) => {
  await context.store.dispatch(
    `${MEDIA_CONSTS.moduleName}/${MEDIA_CONSTS.actions.setViewportWidth}`,
    window.innerWidth
  )
  const device = () =>
    context.store.getters[
      `${MEDIA_CONSTS.moduleName}/${MEDIA_CONSTS.getters.device}`
    ]
  inject('device', device)
  context.$device = device
}
