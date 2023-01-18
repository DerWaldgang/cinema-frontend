import React, { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { TypeMaterialIcon } from '@/shared/types/icons.types'

const MaterialIcon: FC<{ name: TypeMaterialIcon }> = ({ name }) => {
	const IconComponent = MaterialIcons[name]
	return <IconComponent /> || <MaterialIcons.MdDragIndicator />
}

export default MaterialIcon
