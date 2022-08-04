import { css, Global } from '@emotion/react'


export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        background: #222;
        min-height: 100%;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 24px;
      }
    `}
  />
)

