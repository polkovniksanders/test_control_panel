import React from "react"
import Form from "react-bootstrap/Form"
import styled from "./SwitchControl.module.scss"
import Label from "../Label"

type ISwitchControl = {
	taxFree?: boolean,
	handleSwitch:(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const SwitchControl = ({handleSwitch, taxFree}:ISwitchControl) => {

	const checkedStyle = {
		fontWeight:700,
		color: "black"
	}

	const uncheckedStyle = {
		fontWeight: 600,
		color: "darkgrey"
	}

	return (
		<div className={styled.wrapper}>
			<Label>
				<p style={taxFree === false ? checkedStyle : uncheckedStyle}>Указать с НДФЛ</p>
			</Label>
			<Form.Check
				className={styled.switcher}
				onChange={e => handleSwitch(e)}
				type="switch"
				id="custom-switch"
				checked={taxFree}
			/>
			<Label>
				<p style={taxFree === true ? checkedStyle : uncheckedStyle}>Без НДФЛ</p>
			</Label>
		</div>
	)
}

export default SwitchControl
