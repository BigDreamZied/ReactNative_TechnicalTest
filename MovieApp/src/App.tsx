import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { MainNavigation } from './navigation'
import { store } from './redux/store'

const App: FC<{}> = () => {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  )
}

export default App