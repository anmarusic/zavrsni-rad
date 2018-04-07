import { defaultSettings } from './default-settings'

export const environment = { 
  ...defaultSettings, 
  // app specifics
  production: true,
  envName: 'staging'
}
