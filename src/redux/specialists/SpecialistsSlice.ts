import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISpecialist } from '../../types/ISpecialist'

interface IState {
  specialists: ISpecialist[]
  isLoading: boolean
  totalCount: number
}

const initialState: IState = {
  specialists: [],
  isLoading: false,
  totalCount: 0,
}

export const SpecialistsSlice = createSlice({
  name: 'specialists',
  initialState,
  reducers: {},
})
export default SpecialistsSlice.reducer
