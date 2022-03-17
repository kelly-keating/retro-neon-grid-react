import React, { useEffect, useRef, useState } from 'react'

import { horizontalLines, verticalLines } from './utils'

function Grid(props) {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  const canvasRef = useRef(null)

  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight)
    return () => window.removeEventListener('resize', updateWidthAndHeight)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.clearRect(0, 0, canvas.width, canvas.height)

    verticalLines(context, props, { width, height })
    horizontalLines(context, props, { width, height })
  }, [width, height])

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  // TODO: make customisable
  const style = {
    position: 'fixed',
    top: '0px',
    left: '0px',
  }

  return (
    <canvas
      id='grid-canvas'
      ref={canvasRef}
      style={style}
      width={width}
      height={height}
    />
  )
}

export default Grid
