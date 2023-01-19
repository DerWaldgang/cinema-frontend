import { getGenreSlugUrl } from "@/config/url.config"
import { GenreService } from "@/services/genre.service"
import { useQuery } from "react-query"
import { IMenuItem } from "../components/layout/Navigation/Menu/menu.interface"

export const useGenres = () => {
    const queryData = useQuery('genres-menu', () => GenreService.getAllGenres(), {
        select: ({data}) => data.map(genre => ({
            icon: genre.icon,
            link: getGenreSlugUrl(genre.slug),
            title: genre.name
        } as IMenuItem)).splice(0, 4),
        // onError(error){
        //     console.log(error)
        // }
    })

    return queryData
}