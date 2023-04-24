import React from "react"
import {Field} from "react-final-form"
import Form from "react-bootstrap/Form"
import styled from "./Input.module.scss"

type TInputControl = {
	fieldName: string,
	calculate: (val: string) => void,
}

const InputControl = ({fieldName, calculate}:TInputControl) => {
	return (
		<Field name="bitch">
			{() => (
				<Form.Control
					className={styled.input}
					onChange={calculate}
					type="number"
					id="salaty-input"
					aria-describedby="passwordHelpBlock"
				/>
			)}
		</Field>
	)
}



export default InputControl
