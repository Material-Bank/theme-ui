/** @jsxImportSource react */

import React, { createContext, FC, PropsWithChildren, useContext } from 'react'

export interface ThemeUILockBreakpointContextValue {
  breakpointIndex?: number
}

export const ThemeUILockBreakpointContext =
  createContext<ThemeUILockBreakpointContextValue>({})

export const ThemeUILockBreakpointProvider: FC<
  ThemeUILockBreakpointContextValue & PropsWithChildren
> = ({ breakpointIndex, children }) => (
  <ThemeUILockBreakpointContext.Provider value={{ breakpointIndex }}>
    {children}
  </ThemeUILockBreakpointContext.Provider>
)

export const useThemeUILockBreakpointContext = () =>
  useContext(ThemeUILockBreakpointContext)
