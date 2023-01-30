import { ChangeEvent, useCallback, useMemo, useState } from 'react'
import { useMutation } from 'react-query'

import { FileService } from '@/services/file.service'

import { toastError } from '@/utils/toast/toast-error'

type TypeUpload = (
	onChange: (...event: any[]) => void,
	folder?: string
) => {
	uploadFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
	isLoading: boolean
}

export const useUploads: TypeUpload = (onChange, folder) => {
	const [isLoading, setIsLoading] = useState(false)
	const { mutateAsync: uploadAsync } = useMutation(
		'upload file',
		(data: FormData) => FileService.uploadFile(data, folder),
		{
			onSuccess: ({ data }) => {
				onChange(data[0].url)
			},
			onError: (error) => {
				toastError(error, 'Upload file')
			},
		}
	)

	const uploadFile = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			setIsLoading(true)

			const files = e.target.files
			if (!files?.length) return

			const formData = new FormData()
			formData.append('file', files[0])

			await uploadAsync(formData)

			setTimeout(() => {
				setIsLoading(false)
			}, 1000)
		},
		[uploadAsync]
	)

	return useMemo(() => ({ uploadFile, isLoading }), [uploadFile, isLoading])
}
