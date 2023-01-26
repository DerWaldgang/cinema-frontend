import React, { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { TypeMaterialIcon } from '@/shared/types/icons.types'
import { useRenderClient } from '@/hooks/useRenderClient'

const MaterialIcon: FC<{ name: TypeMaterialIcon }> = ({ name }) => {

	const {isRenderClient} = useRenderClient()
	const IconComponent = MaterialIcons[name]
	// work only client
	if(isRenderClient)return <IconComponent /> || <MaterialIcons.MdDragIndicator />
	else return null
}

export default MaterialIcon
