import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../services/api'
import { ISpecialistsRequest } from '../../types/ISpecialist'
import { METHODS } from '../../types/Service'

export const getSpecialists = createAsyncThunk(
  'specialists/fetchSpecialists',
  async ({ limit, offset }: ISpecialistsRequest, thunkAPI) => {
    try {
      const response = await api({
        method: METHODS.GET,
        url: `search/specialists?limit=${limit}&offset=${offset}`,
      })
      return response.data.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей')
    }
  },
)

export const getTopics = createAsyncThunk('specialists/fetchTopics', async (_, thunkAPI) => {
  try {
    const response = await api({ method: METHODS.GET, url: 'subjects' })
    return response.data.data
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось загрузить пользователей')
  }
})
