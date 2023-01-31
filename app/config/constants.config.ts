export const ACCENT_COLOR = '#E30B13'
export const BG_COLOR = '#191B1F'


export const IS_SERVER_ONLY = typeof window === 'undefined'
export const IS_CLIENT_ONLY = typeof window !== 'undefined'
export const IS_PRODUCTION = process.env.APP_ENV === 'production'

