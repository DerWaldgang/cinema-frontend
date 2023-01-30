import { createAsyncThunk } from '@reduxjs/toolkit'

import { AuthService } from '@/services/auth/auth.service'

import { toastError } from '@/utils/toast/toast-error'

import { IAuthResponse, IEmailPassword } from './user.interface'
import { errorCatch } from '@/utils/api/api.helpers'
import { toast } from 'react-toastify'

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.register(email, password)
			toast.success('Registration complete successfully');
			return response.data
		} catch (error) {
			toastError(error)
			return thunkAPI.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.login(email, password)
			toast.success('Login complete successfully')

			return response.data
		} catch (error) {
			toastError(error)
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
                toast.error('Logout - Please sign in again')
            }
            thunkAPI.dispatch(logout())

			return thunkAPI.rejectWithValue(error)
		}
	}
)
