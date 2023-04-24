import React, {PropsWithChildren} from "react"

const T = ({children}:PropsWithChildren) => {
	const style = {
		fontWeight: 700
	}

	return <span style={style}>{children}</span>
}


export default T
