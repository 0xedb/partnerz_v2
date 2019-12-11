import 'normalize.css'
import React from 'react'
import { Client as Styletron } from 'styletron-engine-atomic'
import { Provider as StyletronProvider } from 'styletron-react'
import { LightTheme, BaseProvider, styled } from 'baseui'
const engine = new Styletron()

export const wrapRootElement = ({ element }) => {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>{element}</BaseProvider>
    </StyletronProvider>
  )
}
