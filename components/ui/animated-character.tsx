'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface AnimatedCharacterProps {
  className?: string
  wavingVideo?: string
  workingVideo?: string
}

export function AnimatedCharacter({ 
  className,
  wavingVideo = '/videos/waving.MP4',
  workingVideo = '/videos/working.MP4'
}: AnimatedCharacterProps) {
  const [isAnimated, setIsAnimated] = useState(false)
  const [videoError, setVideoError] = useState<string | null>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [mounted, setMounted] = useState(false)
  const wavingVideoRef = useRef<HTMLVideoElement>(null)
  const workingVideoRef = useRef<HTMLVideoElement>(null)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const wavingVideoWithCache = mounted ? `${wavingVideo}?v=2` : wavingVideo
  const workingVideoWithCache = mounted ? `${workingVideo}?v=2` : workingVideo

  useEffect(() => {
    if (wavingVideoRef.current && !isAnimated) {
      const video = wavingVideoRef.current
      
      const loadingTimeout = setTimeout(() => {
        if (video.readyState < 2 && !videoError) {
          if (video.readyState >= 1) {
            setVideoLoaded(true)
          }
        }
      }, 5000)
      
      const handleMetadata = () => {
        setVideoLoaded(true)
        setVideoError(null)
        clearTimeout(loadingTimeout)
      }
      
      const tryPlay = () => {
        if (video.readyState >= 2) {
          const playPromise = video.play()
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                setVideoLoaded(true)
                setVideoError(null)
              })
              .catch((error) => {
                if (error.name === 'NotAllowedError' || error.name === 'NotSupportedError') {
                  setVideoLoaded(true)
                  setVideoError(null)
                }
              })
          }
        } else if (video.readyState === 1) {
          setTimeout(() => {
            if (video.readyState >= 2) {
              tryPlay()
            }
          }, 500)
        } else {
          setTimeout(tryPlay, 300)
        }
      }

      const handleLoadedData = () => {
        setVideoLoaded(true)
        setVideoError(null)
        tryPlay()
      }
      
      const handleCanPlay = () => {
        setVideoLoaded(true)
        setVideoError(null)
        tryPlay()
      }
      
      const handleCanPlayThrough = () => {
        setVideoLoaded(true)
        setVideoError(null)
        tryPlay()
      }

      video.addEventListener('loadedmetadata', handleMetadata, { once: true })
      video.addEventListener('loadeddata', handleLoadedData, { once: true })
      video.addEventListener('canplay', handleCanPlay, { once: true })
      video.addEventListener('canplaythrough', handleCanPlayThrough, { once: true })

      if (video.readyState >= 1) {
        handleMetadata()
        if (video.readyState >= 2) {
          tryPlay()
        }
      }

      return () => {
        clearTimeout(loadingTimeout)
        video.removeEventListener('loadedmetadata', handleMetadata)
        video.removeEventListener('loadeddata', handleLoadedData)
        video.removeEventListener('canplay', handleCanPlay)
        video.removeEventListener('canplaythrough', handleCanPlayThrough)
      }
    }
  }, [isAnimated, wavingVideo, videoError])

  useEffect(() => {
    if (workingVideoRef.current && isAnimated) {
      const playPromise = workingVideoRef.current.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setVideoLoaded(true)
          })
          .catch((error) => {
            console.error('Error playing working video:', error)
          })
      }
    }
  }, [isAnimated])

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const video = e.currentTarget
    const error = video.error
    
    if (video.readyState >= 1) {
      return
    }
    
    if (!error) {
      return
    }
    
    console.error('Video error:', error.code, error.message)
    
    if (error.code === error.MEDIA_ERR_SRC_NOT_SUPPORTED) {
      setVideoError('Video format not supported. Please clear browser cache and refresh.')
    } else if (error.code === error.MEDIA_ERR_DECODE) {
      setVideoError('Video codec error. Please clear browser cache and refresh.')
    } else if (error.code === error.MEDIA_ERR_NETWORK) {
      setVideoError('Network error loading video.')
    } else if (error.code !== undefined) {
      setVideoError(`Video error (code: ${error.code}).`)
    }
  }

  const handleVideoLoaded = () => {
    setVideoLoaded(true)
    setVideoError(null)
  }

  const handleMetadataLoaded = () => {
    setVideoLoaded(true)
    setVideoError(null)
  }

  useEffect(() => {
    if (!isAnimated) {
      const timer = setTimeout(() => {
        if (wavingVideoRef.current) {
          wavingVideoRef.current.pause()
        }
        setIsAnimated(true)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [isAnimated])

  return (
    <div className={`relative w-full h-full flex items-center justify-center min-h-[500px] ${className}`} style={{ minHeight: '500px' }}>
      <div className="relative w-full h-full flex items-center justify-center" style={{ width: '100%', height: '100%', minHeight: '500px' }}>
        {videoError && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 bg-red-900/20 rounded-lg p-4">
            <p className="text-red-400 text-sm text-center mb-2">{videoError}</p>
            <p className="text-gray-400 text-xs text-center max-w-md">
              Your video files may need to be converted to H.264 codec for better browser compatibility.
            </p>
          </div>
        )}

        {!videoLoaded && !videoError && (
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="text-gray-400">Loading video...</div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {!isAnimated && (
            <motion.div
              key="waving"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative flex items-center justify-center"
              style={{ 
                width: '100%',
                height: '100%',
                minHeight: '500px',
                maxWidth: '624px',
                maxHeight: '624px',
                margin: '0 auto'
              }}
            >
              <video
                ref={wavingVideoRef}
                src={wavingVideoWithCache}
                style={{ 
                  width: '624px',
                  height: '624px',
                  objectFit: 'contain',
                  display: 'block'
                }}
                loop
                muted
                playsInline
                autoPlay
                preload="auto"
                onError={handleVideoError}
                onLoadedData={handleVideoLoaded}
                onCanPlay={handleVideoLoaded}
                onLoadedMetadata={handleMetadataLoaded}
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          )}

          {isAnimated && (
            <motion.div
              key="working"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center justify-center"
              style={{ 
                width: '100%',
                height: '100%',
                minHeight: '500px',
                maxWidth: '624px',
                maxHeight: '624px',
                margin: '0 auto'
              }}
            >
              <video
                ref={workingVideoRef}
                src={workingVideoWithCache}
                style={{ 
                  width: '624px',
                  height: '624px',
                  objectFit: 'contain',
                  display: 'block'
                }}
                loop
                muted
                playsInline
                autoPlay
                preload="auto"
                onError={handleVideoError}
                onLoadedData={handleVideoLoaded}
                onCanPlay={handleVideoLoaded}
                onLoadedMetadata={handleMetadataLoaded}
              >
                Your browser does not support the video tag.
              </video>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

