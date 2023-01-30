import { toast } from 'react-toastify'

import { errorCatch } from '../../api/api.helpers'

export const toastError = (error: any, title?: string) => {
	const message = errorCatch(error)

	toast.error(title ? ` ${title} - ${message}` : message)
	throw message
}
