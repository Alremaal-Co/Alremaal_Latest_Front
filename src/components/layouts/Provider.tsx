"use client"
import store from '@/Store/store'
import React, { ReactNode } from 'react'
import { Provider } from 'react-redux'

// The component is now simpler and only handles the Redux store.
export default function ReduxProvider({children}:{children:ReactNode}) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}