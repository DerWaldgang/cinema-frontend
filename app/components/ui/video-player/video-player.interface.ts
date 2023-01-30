export interface IVideoPlayer {
    videoSource: string
    slug: string
}
// без этого ts будет жаловаться что такого атрибута нет
export interface IVideoElement extends HTMLVideoElement{
    msRequestFullScreen?: () => void
    mozRequestFullScreen?: () => void
    webkitRequestFullScreen?: () => void
}