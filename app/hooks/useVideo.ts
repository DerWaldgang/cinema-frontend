import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { IVideoElement } from '@/components/ui/video-player/video-player.interface'

export const useVideo = () => {
	const videoRef = useRef<IVideoElement>(null)

	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTime, setCurrentTime] = useState(0)
	const [videoTime, setVideoTime] = useState(0)
	const [progress, setProgress] = useState(0)


	useEffect(() => {
		const videoDuration = videoRef?.current?.duration
		if (videoDuration) {
			setVideoTime(videoDuration)
		}
	}, [videoRef?.current?.duration])

	// Play & Stop

	const togglePlay = useCallback(() => {
		if (!isPlaying) {
			videoRef?.current?.play()
			setIsPlaying(true)
		} else {
			videoRef?.current?.pause()
			setIsPlaying(false)
		}
	}, [isPlaying])

	// Forward 10 sec

	const forward = () => {
		if (videoRef.current) videoRef.current.currentTime += 10
	}

	// Revert 10 sec
	const revert = () => {
		if (videoRef.current) videoRef.current.currentTime -= 10
	}

	// Full Screen

	const fullScreen = () => {
		const video = videoRef.current

		if (!video) return

		if (video.requestFullscreen) {
			video.requestFullscreen()
		} else if (video.msRequestFullScreen) {
			video.msRequestFullScreen()
		} else if (video.mozRequestFullScreen) {
			video.mozRequestFullScreen()
		} else if (video.webkitRequestFullScreen) {
			video.webkitRequestFullScreen()
		}
	}


	// Hotkeys - ' *space* ' , 'f', '->', '<-'

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			switch (e.key) {
				case 'ArrowRight':
					forward()
					break
				case 'ArrowLeft':
					revert()
					break
				case ' ': {
					e.preventDefault()
					togglePlay()
					break
				}
				case 'f':
					fullScreen()
					break
				default:
					return
			}
		}
		document.addEventListener('keydown', handleKeyDown)
		return () => {
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [togglePlay])

	// Progressbar

	useEffect(() => {
		const video = videoRef.current
		if (!video) return

		const updateProgress = () => {
			setCurrentTime(video.currentTime)
			setProgress((video.currentTime / videoTime) * 100)
		}

		video.addEventListener('timeupdate', updateProgress)

		return () => {
			video.removeEventListener('timeupdate', updateProgress)
		}
	}, [videoTime])

	// Timecodes

	return useMemo(
		() => ({
			videoRef,
			actions: {
				fullScreen,
				revert,
				forward,
				togglePlay,

			},
			video: {
				isPlaying,
				currentTime,
				progress,
				videoTime,

			},
		}),
		[isPlaying, currentTime, progress, videoTime, togglePlay]
	)
}
