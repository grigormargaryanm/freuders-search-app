import { combineReducers, configureStore } from '@reduxjs/toolkit'
import specialistsReducer from './specialists/SpecialistsSlice'

const rootReducer = combineReducers({
  specialists: specialistsReducer,
})
export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
