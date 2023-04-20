import React from "react"
import {Field} from "react-final-form"
import Label from "../Label"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"


import styled from "./SelectControl.module.scss"

interface IFields {
	id: string,
	title: string,
	hint: string,
	hasInput: boolean,
	paymentType: string,
}

type TField = {
	fields: Array<IFields>,
	handleSelect: (val: string) => void,
	selectedId: string | null,
}

const SelectControl = ({fields, handleSelect, selectedId}: TField) => {

	return 	<>
		{fields.map((field, key) =>
			<Field
				key={`radio-${key}`}
				name="paymentType"
				/*value={value}
						paymentType={paymentType}*/
			>
				{props => <div className={styled.wrapper}>
					<Form.Check
						name={field.paymentType}
						checked={ selectedId ? field?.id === selectedId : false}
						onChange={() => handleSelect(field.id) }
						type={"radio"}
						id={`default-${field.id}`}
						label={field.title}
					/>
				</div>
				}
			</Field>)}
	</>
}



export default SelectControl
