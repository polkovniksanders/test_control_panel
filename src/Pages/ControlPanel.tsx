import React, {useEffect, useState} from "react"
import { Form, Field } from "react-final-form"

import InputControl from "../components/InputControl"
import SelectControl from "../components/SelectControl"
import Box from "../components/Box"
import {fieldsData, IField} from "../utils/fields"
import {NDFL_PERCENT} from "../utils/settings"
import styled from "./ControlPanel.module.scss"
import {addition, subtraction} from "../utils/calculate"
import SwitchControl from "../components/SwitchControl"



const ControlPanel = (): JSX.Element => {
	const [ fields, setFields ] = useState<IField[]>([])
	const [ selectedId, setSelectedId ] = useState<string | null>(null)
	const [ salaryInput, setSalaryInput ] = useState<boolean | null>(true)
	const [ salary, setSalary ] = useState<object | null>(null)
	const [ salaryBoxVisible, setSalaryBoxVisible] = useState<boolean | null>(true)
	const [ withTax, setWithTax] = useState<boolean | undefined>(false)

	useEffect(() => {
		setFields(fieldsData || [])
	}, [])

	const onSubmit = () => {
		console.log("submit handler")
	}

	const calculate = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) : void => {
		//Сумма введенная вручную
		const cleanValue = Number(event.target.value)
		//Вычисляем процент отчислений
		const taxPercent = cleanValue / 100 * NDFL_PERCENT
		//Итоговая сумма
		const totalPayment = addition(cleanValue, taxPercent)

		setSalary({
			clean: cleanValue,
			tax: taxPercent,
			total: totalPayment
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


		setSalary(null)

	}

	const handleSwitch = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		console.log(event)
		setWithTax(true)
	}



	return (
		<div>
			<label>Сумма</label>
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
						<SwitchControl
							withTax={withTax}
							handleSwitch={handleSwitch}
						/>
						{salaryInput && <InputControl calculate={calculate}/> }

						{salaryBoxVisible && <Box {...salary} />}

					</form>
				)}
			/>
		</div>
	)
}



export default ControlPanel
