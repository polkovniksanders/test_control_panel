import React from "react"
import {Field} from "react-final-form"
import Label from "../Label"

type TInputControl = {
	fieldName: string,
}

const InputControl = ({fieldName}:TInputControl) => {
	return (
		<Field name="username">
			{({ input, meta }) => (
				<div>
					<Label>Указать с НДФЛ</Label>
					<input
						{...input}
						type="text"
						placeholder="0"
						/*onChange={calculate}*/
					/>
					{meta.error && meta.touched && <span>{meta.error}</span>}
				</div>
			)}
		</Field>
	)
}



export default InputControl
