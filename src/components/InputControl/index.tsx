import React from "react"

import {Field} from "react-final-form"
import Form from "react-bootstrap/Form"
import styled from "./Input.module.scss"
import Rub from "../Icons/Rub"
import T from "../Typography"

type IInputControl = {
	calculateSalary: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
	salaryValue: string,
}

const InputControl = ({salaryValue, calculateSalary}: IInputControl) => {
	return (
		<div className={styled.wrapper}>
			<Field name="salary-input">
				{() => (
					<Form.Control
						style={{margin: "0 1.5rem"}}
						className={styled.input}
						onChange={e => calculateSalary(e)}
						value={salaryValue}
						type="number"
						id="salary-input"
						placeholder={"Введите сумму"}
					/>
				)}
			</Field>
			<T><Rub/></T>
		</div>
	)
}



export default InputControl
