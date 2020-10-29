import React from 'react'

export const StateContext = React.createContext({})

export const StateProvider = StateContext.Provider;
export const StateConsumer = StateContext.Consumer;