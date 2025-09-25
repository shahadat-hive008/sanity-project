import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  server: {
    port: 4333,
  },
  api: {
    projectId: 'hg3twyxq',
    dataset: 'production',
  },
  deployment: {
    appId: 'lmduf3oa4s0nx06r97ltyl83',
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
})
