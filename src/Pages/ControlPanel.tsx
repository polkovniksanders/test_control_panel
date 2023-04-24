import React, {useEffect, useState} from "react"
import { Form, Field } from "react-final-form"

import InputControl from "../components/InputControl"
import SelectControl from "../components/SelectControl"
import Box from "../components/Box"
import SwitchControl from "../components/SwitchControl"
import Label from "../components/Label"
import {addition, subtraction} from "../utils/calculate"
import styled from "./ControlPanel.module.scss"
import {fieldsData, IField} from "../utils/fields"
import {NDFL_PERCENT} from "../utils/settings"

const ControlPanel = (): JSX.Element => {
	const [ fields, setFields ] = useState<IField[]>([])
	const [ selectedId, setSelectedId ] = useState<string | null>(null)
	const [ salaryInput, setSalaryInput ] = useState<boolean | null>(true)
	const [ salary, setSalary ] = useState<object | null>(null)
	const [ salaryBoxVisible, setSalaryBoxVisible] = useState<boolean | null>(true)
	const [ taxFree, setTaxFree] = useState<boolean | undefined>(true)
	const [ salaryValue, setSalaryValue ] = useState<string>("")

	useEffect(() => {
		setFields(fieldsData || [])
	}, [])

	const onSubmit = () => {
		console.log("submit handler")
	}

	useEffect(() => {
		calculate()
	}
	,[ salaryValue, taxFree ])

	const calculateSalary = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void  => {
		setSalaryValue(event.target.value)
	}

	const calculate = () : void => {
		/*Логику расчета смотрите в корне в файле CALCULATE.md*/
		const cleanValue = Number(salaryValue)
		const taxPercent = cleanValue / 100 * NDFL_PERCENT
		const totalPayment = addition(cleanValue, taxPercent)

		setSalary({
			clean: taxFree ? cleanValue : cleanValue - taxPercent,
			tax: taxPercent,
			total: taxFree ? totalPayment : cleanValue
		})
	}

	const handleSelect = (id:string) : void => {
		setSelectedId(id)
		if (id !== "2") {
			setSalaryInput(true)
		} else setSalaryInput(false)

		if (id === "1") {
			setSalaryBoxVisible(true)
		} else setSalaryBoxVisible(false)

		setSalaryValue("")
	}

	const handleSwitch = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setTaxFree(!taxFree)
	}

	return (
		<div>
			<Label>Сумма</Label>
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
						/>
						{selectedId === "2" ? null :
							<SwitchControl
								taxFree={taxFree}
								handleSwitch={handleSwitch}
							/>}
						{salaryInput && <InputControl
							salaryValue={salaryValue}
							calculateSalary={calculateSalary}
						/> }

						{salaryBoxVisible && <Box {...salary} />}
					</form>
				)}
			/>
		</div>
	)
}



export default ControlPanel
