import React, { useEffect, useRef, useState } from 'react'

import { horizontalLines, verticalLines } from './utils'

function Grid (props) {
  const {
    lineWidth = 2,
    top = 30,
    glow = true,
    colour = '#aa00ff',
    angle = 20,
    spacing = 2,
    gap = 0.3,
  } = props

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

    const allDeets = {
      lineWidth,
      top,
      glow,
      colour,
      angle,
      spacing,
      gap,
    }

    verticalLines(context, allDeets, { width, height })
    horizontalLines(context, allDeets, { width, height })
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
