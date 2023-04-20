import React from "react"
import {Field} from "react-final-form"

type TField = {
    key: string,
    value: string
    handleSelect: () => void;
	hasInput: boolean,
}

const FieldControl = ({key, value, handleSelect, hasInput}: TField) => {
	return (
		<label
			className={"f"}
			key={key}
			onChange={handleSelect}
		>
			<Field
				name="paymentType"
				component="input"
				type="radio"
				value={value}
			/>{" "}
			{value}
		</label>
	)
}

export default FieldControl
