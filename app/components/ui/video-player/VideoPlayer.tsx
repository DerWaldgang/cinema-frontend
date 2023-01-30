import cn from 'classnames'
import { ChangeEvent, FC, useEffect, useState } from 'react'

import { useAuth } from '@/hooks/auth/useAuth'
import { useVideo } from '@/hooks/movie/useVideo'

import AuthPlaceholder from './AuthPlaceholder/AuthPlaceholder'
import styles from './VideoPlayer.module.scss'
import { IVideoPlayer } from './video-player.interface'

import MaterialIcon from '../icon/MaterialIcon'
import { useDebounce } from '@/hooks/useDebounce'

const VideoPlayer: FC<IVideoPlayer> = ({ slug, videoSource }) => {
	const { videoRef, video, actions } = useVideo()

	const [volume, setVolume] = useState(0.5)

    const debouncedVolume= useDebounce(volume, 100)

	const volumeChanger = (e: any) => {
		setVolume(parseFloat(e.target.value))
	}

	useEffect(() => {
		const video = videoRef.current
		if (!video) return
		video.volume = debouncedVolume
	}, [debouncedVolume])

	const { user } = useAuth()
	return (
		<div
			className={cn(styles.wrapper, {
				'h-96': !user,
			})}
		>
			{user ? (
				<>
					<video
						ref={videoRef}
						className={styles.video}
						src={`${videoSource}#t=8`}
						preload={'metadata'}
                        onClick={actions.togglePlay}
					/>
					<div className={styles.progressBarContainer}>
						<div
							style={{ width: `${video.progress}%` }}
							className={styles.progressBar}
						/>
					</div>

					<div className={styles.controls}>
						<div>
							<button onClick={actions.revert}>
								<MaterialIcon name="MdHistory" />
							</button>

							<button
								onClick={actions.togglePlay}
								className={styles.playButton}
							>
								<MaterialIcon
									name={video.isPlaying ? 'MdPause' : 'MdPlayArrow'}
								/>
							</button>

							<button onClick={actions.forward}>
								<MaterialIcon name="MdUpdate" />
							</button>

							{/* <div> */}
								<input
									type="range"
									min="0"
									max="1"
									step="0.01"
									onChange={(e) => volumeChanger(e)}
									value={volume}
								/>
							{/* </div> */}

							<div className={styles.timeControls}>
								<p className={styles.controlsTime}>
									{Math.floor(video.currentTime / 60) +
										':' +
										('0' + Math.floor(video.currentTime % 60)).slice(-2)}
								</p>
								<p> / </p>
								<p className={styles.controlsTime}>
									{Math.floor(video.videoTime / 60) +
										':' +
										('0' + Math.floor(video.videoTime % 60)).slice(-2)}
								</p>
							</div>
						</div>

						<div>
							<button onClick={actions.fullScreen}>
								<MaterialIcon name="MdFullscreen" />
							</button>
						</div>
					</div>
				</>
			) : (
				<AuthPlaceholder slug={slug} />
			)}
		</div>
	)
}

export default VideoPlayer
function setVolume(arg0: number) {
	throw new Error('Function not implemented.')
}
