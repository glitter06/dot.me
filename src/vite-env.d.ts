/// <reference types="vite/client" />
// src/vite-env.d.ts
declare module '*.svg' {
    import * as React from 'react'
  
    const ReactComponent: React.FunctionComponent<
      React.ComponentProps<'svg'> & { title?: string }
    >
    export default ReactComponent
  }