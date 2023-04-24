import React, { ReactNode, FC } from "react"
import styled from "./Label.module.scss"

type Props = {
	children: ReactNode
	key?: string,
	className?: string
}

const Label: FC<Props> = ({
	children,
	key,
	className
}) => {
	return (
		<label className={styled.wrapper} key={key}>
			{children}
		</label>
	)
}

export default Label
