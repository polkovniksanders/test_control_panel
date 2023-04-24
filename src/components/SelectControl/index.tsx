import React from "react"
import Form from "react-bootstrap/Form"

import {Field} from "react-final-form"
import Hint from "../Hint"
import styled from "./SelectControl.module.scss"
import {IField} from "../../utils/fields"
import T from "../Typography"


type TField = {
	fields: Array<IField>,
	handleSelect: (val: string) => void,
	selectedId: string | null,
}

const SelectControl = ({fields, handleSelect, selectedId}: TField) => {
	return <> {
		fields.map((field, key) =>
			<Field
				key={`radio-${key}`}
				name="paymentType"
			>
				{() => <div className={styled.wrapper}>
					<Form.Check
						id={`default-${field.id}`}
						type={"radio"}
						label={<T>{field.title}</T>}
						name={field.paymentType}
						checked={ selectedId ? field?.id === selectedId : field.checked}
						onChange={() => handleSelect(field.id) }
					/>
					{field.hint && <Hint text={field.hint}/>}
				</div>
				}
			</Field>
		)}
	</>
}

export default SelectControl
