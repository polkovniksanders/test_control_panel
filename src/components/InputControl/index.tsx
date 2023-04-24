import React from "react"
import {Field} from "react-final-form"
import Form from "react-bootstrap/Form"
import styled from "./Input.module.scss"

type IInputControl = {
	calculate: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const InputControl = ({calculate}: IInputControl) => {
	return (
		<Field name="bitch">
			{() => (
				<Form.Control
					className={styled.input}
					onChange={e => calculate(e)}
					type="number"
					id="salaty-input"
				/>
			)}
		</Field>
	)
}



export default InputControl
