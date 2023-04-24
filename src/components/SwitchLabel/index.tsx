import React from "react"

const ComplexLabel = ({children}) => {
	return (
		<div>
			{topLabel}
			{children}
			{bottomLabel}
		</div>
	)
}


export default ComplexLabel
