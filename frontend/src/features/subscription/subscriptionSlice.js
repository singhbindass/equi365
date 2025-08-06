import { createSlice } from '@reduxjs/toolkit';

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState: {
    plan: 'free', // free | pro | enterprise
    features: []
  },
  reducers: {
    setSubscription: (state, action) => {
      state.plan = action.payload.plan;
      state.features = action.payload.features;
    }
  }
});

export const { setSubscription } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
