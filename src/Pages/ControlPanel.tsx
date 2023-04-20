import React, {useEffect, useState} from "react"
import { Form, Field } from "react-final-form"
import {fieldsData, IField} from "../utils/fields"
import styled from "./ControlPanel.module.scss"
import InputControl from "../components/InputControl"
import SelectControl from "../components/SelectControl"




const ControlPanel = (): JSX.Element => {
	const [ fields, setFields ] = useState<IField[]>([])
	const [ selectedId, setSelectedId ] = useState<string | null>(null)
	const [ salaryInput, setSalaryInput ] = useState<boolean | null>(true)

	useEffect(() => {
		setFields(fieldsData || [])
	}, [])

	const onSubmit = () => {
		console.log("f")
	}

	const calculate = (event: React.ChangeEvent<HTMLInputElement> ) => {
		const enteredName = event.target.value
		console.log(enteredName)
	}

	const handleSelect = (id:string) : void => {
		setSelectedId(id)
		if (id !== "2") {
			setSalaryInput(true)
		} else setSalaryInput(false)

	}

	console.log(salaryInput)

	return (
		<Form
			onSubmit={onSubmit}
			render={({
				handleSubmit,
				values }) => (
				<form className={styled.form} onSubmit={handleSubmit}>
					<SelectControl
						fields={fields}
						handleSelect={handleSelect}
						selectedId={selectedId}
						/*isSelected={isSelected}
						key={field.id}
						value={field.title}
						hasInput={field.hasInput}
						paymentType={field.paymentType}*/
					/>

					{salaryInput && <InputControl fieldName={"fieldName"}/> }

					<pre>{JSON.stringify(values)}</pre>
				</form>
			)}

		/>
	)
}



export default ControlPanel
