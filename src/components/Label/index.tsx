import React, { ReactNode, FC } from "react"

type Props = {
	children: ReactNode
}


const Label: FC<Props> = ({children}) => {
	return (
		<div>
			{children}
		</div>
	)
}



export default Label
