import React from 'react'
// EXCLUDE
type Shape = 'cube' | 'square' | 'rectangle' | 'triangle'
// Here we are excluding cube as a 2DType
type TwoDShape = Exclude<Shape, 'cube'>

// COMBINE
type ThemeType = 'dark' | 'light'
type ColorType = 'blue' | 'green' | 'orange'

type CombineType = `${ThemeType}-${ColorType}`

type ExcludeColor = Exclude<`${ThemeType}-${ColorType}`, 'light-orange'>

const CombineExclude = () => {
  const TDshape: TwoDShape = 'triangle'
  const shape: Shape = 'cube'

  const Colours: CombineType = 'light-orange'

  const ExcludedColor: ExcludeColor = 'light-green'

  return <></>
}

export default CombineExclude
