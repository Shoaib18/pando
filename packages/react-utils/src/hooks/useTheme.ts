import { useEffect, useState, useCallback, useMemo } from 'react'
import { getCachedTheme, setCachedTheme } from '../helpers/themeHelpers'
import type { Themes } from '../types'

export function useTheme(initialTheme?: Themes) {
  const [theme, setTheme] = useState<Themes>(() => {
    return initialTheme ?? getCachedTheme()
  })

  useEffect(() => {
    setCachedTheme(theme)
  }, [theme])

  const updateTheme = useCallback((theme: Themes) => {
    setTheme(theme)
  }, [])

  return useMemo(
    () => ({
      theme,
      updateTheme,
    }),
    [theme, updateTheme]
  )
}
