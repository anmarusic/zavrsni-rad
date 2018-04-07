import { defaultSettings } from './default-settings'

export const environment = { 
  ...defaultSettings,
  // app specifics
  envName: 'local',
  API_URL: 'http://localhost:3000'
}
