export function horizontalLines (context, props, dimensions) {
  let a = 0
  let b = 0.4

  horzLine(context, props, dimensions, 0)

  while ( b < 100 - props.top) {
    horzLine(context, props, dimensions, b)
    const sum = a + b
    a = b
    b = sum
  }
}

export function verticalLines (context, props, dimensions) {
    const numOfLinesAcross = Math.floor(50 / props.gap)
    for (let i = -1 * numOfLinesAcross; i < numOfLinesAcross + 1; i++) {
      const angle = i * props.angle
      if (angle < 90 && angle > -90) {
        vertLine(context, props, dimensions, i, angle)
      }
    }
}

export function horzLine (context, { top, lineWidth, colour }, { width, height }, down) {
  const y = (down + top) / 100 * height

  context.beginPath()
  context.moveTo(0, y)
  context.lineTo(width, y)

  draw(context, lineWidth, colour)
}

export function vertLine (context, { lineWidth, colour, top, gap }, { height, width }, across, angle) {
  context.beginPath()

  const topX = ((50 + (across * gap)) / 100 * width) - (lineWidth / 2)
  const topY = top / 100 * height
  context.moveTo(topX, topY)

  const lowerX = topX + Math.tan(angle * (Math.PI/180)) * (height - top)
  const lowerY = height
  context.lineTo(lowerX, lowerY)

  draw(context, lineWidth, colour)
}

export function draw (context, lineWidth, colour) {
  context.lineWidth = lineWidth
  context.strokeStyle = colour
  context.shadowBlur = 5
  context.shadowColor = colour
  context.stroke()
}
