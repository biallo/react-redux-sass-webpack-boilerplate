import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userService from '../../services/UserService';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    activities: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getActivities.fulfilled, (state, action) => {
      if (action.payload) {
        state.activities = action.payload.data.list;
      }
    })
  },
});

export const getActivities = createAsyncThunk('user/getActivities', async (params) => {
  // const res = await userService.getActivities(params);
  // return res;

  // fake data
  return {
    code: 0,
    data: {
      list: [{
        actionType: 1,
        location: 'Arcadia/Mars',
        ip: '0.0.0.0',
        createdTime: '2023-01-01T11:11:11.000Z'
      }, {
        actionType: 2,
        location: 'Casius/Mars',
        ip: '0.0.0.0',
        createdTime: '2023-02-02T22:22:22.000Z'
      }]
    }
  };
});

export default userSlice.reducer;
