import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AUTH_TOKEN } from 'constants/AuthConstant';
import AuthService from 'services/AuthService';

export const initialState = {
  loading: false,
  message: '',
  showMessage: false,
  redirect: '',
  token: localStorage.getItem(AUTH_TOKEN) || null,
};

export const signIn = createAsyncThunk('auth/login', async (data, { rejectWithValue }) => {
  const { email, password } = data;
  try {
    const response = await AuthService.login({ email, password });
    const token = response.token;
    localStorage.setItem(AUTH_TOKEN, token);
    return { token, message: response.message };
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Error');
  }
});

export const signUp = createAsyncThunk('auth/register', async (data, { rejectWithValue }) => {
  const { email, password } = data;
  try {
    const response = await AuthService.register({ email, password });
    const token = response.token;
    localStorage.setItem(AUTH_TOKEN, token);
    return { token, message: response.message };
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Error');
  }
});

export const signOut = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem(AUTH_TOKEN);
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticated: (state, action) => {
      state.loading = false;
      state.redirect = '/';
      state.token = action.payload;
    },
    showAuthMessage: (state, action) => {
      state.message = action.payload;
      state.showMessage = true;
      state.loading = false;
    },
    hideAuthMessage: (state) => {
      state.message = '';
      state.showMessage = false;
    },
    signOutSuccess: (state) => {
      state.loading = false;
      state.token = null;
      state.redirect = '/';
    },
    showLoading: (state) => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.redirect = '/';
        state.token = action.payload.token;
        state.message = action.payload.message;
        state.showMessage = true;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.message = action.payload;
        state.showMessage = true;
        state.loading = false;
      })
      .addCase(signOut.fulfilled, (state) => {
        state.loading = false;
        state.token = null;
        state.redirect = '/';
      })
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.redirect = '/';
        state.token = action.payload.token;
        state.message = action.payload.message;
        state.showMessage = true;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.message = action.payload;
        state.showMessage = true;
        state.loading = false;
      });
  },
});

export const {
  authenticated,
  showAuthMessage,
  hideAuthMessage,
  signOutSuccess,
  showLoading,
  signInSuccess,
} = authSlice.actions;

export default authSlice.reducer;
