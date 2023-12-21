import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../services/api'
import { ISpecialistsRequest } from '../../types/ISpecialist'
import { Methods } from '../../types/Service'

type GetSpecialist = {
  data: ISpecialistsRequest
  merged: boolean
}
export const getSpecialists = createAsyncThunk(
  'specialists/fetchSpecialists',
  async (params: GetSpecialist, thunkAPI) => {
    try {
      const response = await api<ISpecialistsRequest>({
        method: Methods.GET,
        url: 'search/specialists',
        params: params.data,
      })
      return {
        items: response.data.data.items,
        totalCount: response.data.data.totalCount,
        merged: params.merged,
      }
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей')
    }
  },
)

export const getTopics = createAsyncThunk('specialists/fetchTopics', async (_, thunkAPI) => {
  try {
    const response = await api({ method: Methods.GET, url: 'subjects' })
    return response.data.data
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось загрузить пользователей')
  }
})
