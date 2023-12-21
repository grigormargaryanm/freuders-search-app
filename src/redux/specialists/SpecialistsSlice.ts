import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISpecialist, ISpecialistsResponse } from '../../types/ISpecialist'
import { ITopic } from '../../types/ITopic'
import { getSpecialists, getTopics } from './hook'

interface IState {
  specialists: ISpecialist[]
  isLoading: boolean
  totalCount: number
  topics: ITopic[]
}

const initialState: IState = {
  specialists: [],
  isLoading: false,
  totalCount: 0,
  topics: [],
}

export const SpecialistsSlice = createSlice({
  name: 'specialists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSpecialists.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getSpecialists.fulfilled, (state, action: PayloadAction<ISpecialistsResponse>) => {
        state.isLoading = false
        state.specialists = action.payload.items
        state.totalCount = action.payload.totalCount
      })
      .addCase(getTopics.fulfilled, (state, action: PayloadAction<ITopic[]>) => {
        state.topics = action.payload
      })
  },
})
export default SpecialistsSlice.reducer
