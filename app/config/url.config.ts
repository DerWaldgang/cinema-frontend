export const getGenreSlugUrl = (slug: string) => `/genre/${slug}`
export const getMovieSlugUrl = (slug: string) => `/movie/${slug}`
export const getActorSlugUrl = (slug: string) => `/actor/${slug}`

export const getAdminUrl = (url: string) => `/manage/${url}`
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1)