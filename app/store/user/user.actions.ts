import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import { AuthService } from '@/services/auth/auth.service'

import { toastrError } from '@/utils/toastr/toast-error'

import { IAuthResponse, IEmailPassword } from './user.interface'
import { errorCatch } from '@/utils/api/api.helpers'

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.register(email, password)
			toastr.success('Registration', 'Complete successfully')

			return response.data
		} catch (error) {
			toastrError(error)
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.login(email, password)
			toastr.success('Login', 'Complete successfully')

			return response.data
		} catch (error) {
			toastrError(error)
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
	await AuthService.logout()
})

export const checkAuth = createAsyncThunk<IAuthResponse>(
	'auth/check-auth',
	async (_, thunkAPI) => {
		try {

			const response = await AuthService.getNewTokens()
			return response.data

		} catch (error) {

            if(errorCatch(error) === 'jwt expired'){
                toastr.error('Logout', 'Please sign in again')
            }
            thunkAPI.dispatch(logout())

			return thunkAPI.rejectWithValue(error)
		}
	}
)
