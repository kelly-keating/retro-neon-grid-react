export function horizontalLines (context, props, dimensions, linear) {
  let a = 0
  let b = props.gap

  horzLine(context, props, dimensions, 0)

  while ( b < 100 - props.top) {
    horzLine(context, props, dimensions, b)
    if(linear) {
      b = b + props.gap
    } else {
      const sum = a + b
      a = b
      b = sum
    }
  }
}

export function verticalLines (context, props, dimensions) {
    const numOfLinesAcross = Math.floor(50 / props.spacing)
    for (let i = -1 * numOfLinesAcross; i < numOfLinesAcross + 1; i++) {
      const angle = i * props.angle
      if (angle < 90 && angle > -90) {
        vertLine(context, props, dimensions, i, angle)
      }
    }
}

export function horzLine (context, { top, lineWidth, colour, glow }, { width, height }, down) {
  const y = (down + top) / 100 * height

  context.beginPath()
  context.moveTo(0, y)
  context.lineTo(width, y)

  draw(context, lineWidth, colour, glow)
}

export function vertLine (context, { lineWidth, colour, top, spacing, glow }, { height, width }, across, angle) {
  context.beginPath()

  const topX = ((50 + (across * spacing)) / 100 * width) - (lineWidth / 2)
  const topY = top / 100 * height
  context.moveTo(topX, topY)

  const lowerX = topX + Math.tan(angle * (Math.PI/180)) * (height - top)
  const lowerY = height
  context.lineTo(lowerX, lowerY)

  draw(context, lineWidth, colour, glow)
}

export function draw (context, lineWidth, colour, glow) {
  context.lineWidth = lineWidth
  context.strokeStyle = colour
  if (glow) {
    context.shadowBlur = 5
    context.shadowColor = colour
  }
  context.stroke()
}
