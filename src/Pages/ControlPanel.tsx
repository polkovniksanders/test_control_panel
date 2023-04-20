import React from "react"
import { Form, Field } from "react-final-form"
import FieldControl from "../components/FieldControl"
import {fields} from "../utils/fields"
import styled from "./ControlPanel.module.scss"
import InputControl from "../components/InputControl"




const ControlPanel = (): JSX.Element => {

	const onSubmit = () => {
		console.log("hello")
	}

	const calculate = (event: React.ChangeEvent<HTMLInputElement> ) => {
		const enteredName = event.target.value
		console.log(enteredName)
	}

	const handleSelect = () => {
		console.log("fd")
	}

	return (
		<Form
			onSubmit={onSubmit}
			render={({
				handleSubmit,
				form,
				submitting,
				pristine,
				values }) => (
				<form className={styled.form} onSubmit={handleSubmit}>
					{fields.map((field, key) =>
						<FieldControl
							key={field.id}
							value={field.title}
							hasInput={field.hasInput}
							handleSelect={handleSelect}/>
					)}
					<InputControl fieldName={"fieldName"}/>

					<pre>{JSON.stringify(values)}</pre>
				</form>
			)}

		/>
	)
}



export default ControlPanel
