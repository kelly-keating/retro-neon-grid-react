# retro-neon-grid-react

A hooks-based react component to take the hassle out of making a neon glowing grid for that sweet 80's experience.

## Install

```sh
npm i retro-neon-grid-react
```

## Usage

To be used within an existing react component :)

```js
import React from 'react'
import Grid from 'retro-neon-grid-react'

function App () {
  return (
    <div>
      <Grid />
      <header>
        <h1>My sweet site</h1>
      </header>
    </div>
  )
}

export default App
```

![grid covers the lower two thirds of the image, angled vertical lines get closer together as they near the highest horizontal line and all lines are purple in colour with faint outline](https://github.com/kelly-keating/retro-neon-grid-react/blob/main/images/default.png)

## Details

The grid component creates a canvas with the id `grid-canvas`.

This canvas is currently hardcoded to be fixed to the full height and width of the viewport.

### Customisation

The following shows the props you can provide the component to customise the grid and their default values.

| key | description | default value |
|---|---|:-:|
| lineWidth | Pixel width of all drawn lines. | 2 |
| top | The top of the grid. Calculated out of 100 where 0 is the top of the page and 100 is the bottom.| 30 |
| glow | Whether lines appear with a "glow" shadow. | true |
| colour | Colour of the drawn lines. | '#aa00ff' |
| angle | Angle at which vertical lines angle away from the center (getting progressively larger). Use 0 and all vertical lines will be completely vertical. Negative value will angle lines closer towards the bottom of the page. | 20 |
| spacing | Distance between top point of neighbouring vertical lines. | 2 |
| gap | Starting gap at top of horizontal lines. This is kept small at the top and gets progressively larger down the grid. | 0.3 |
| linearY | Apply same gap between horizontal lines rather than progressively increasing | false |
| position | CSS property applied to the canvas. | "fixed" |
| zIndex |  CSS property applied to the canvas. | -9999 |

Example of customised component:
```js
import React from 'react'
import Grid from 'retro-neon-grid-react'

function App () {
  return (
    <div>
      <Grid 
        lineWidth={5}
        glow={false}
        colour='#3ff2d5' 
        angle={10} 
        top={50} 
      />
      <header>
        <h1>My sweet site</h1>
      </header>
    </div>
  )
}

export default App
```

![grid covers the lower half of the image, vertical lines appear closer together and all lines are mint in colour](https://github.com/kelly-keating/retro-neon-grid-react/blob/main/images/example.png)
