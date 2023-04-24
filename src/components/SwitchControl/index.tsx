import React from "react"
import Form from "react-bootstrap/Form"
import styled from "./SwitchControl.module.scss"

type ISwitchControl = {
	withTax?: boolean,
	handleSwitch:(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const SwitchControl = ({handleSwitch, withTax}:ISwitchControl) => {
	return (
		<Form>
			<div className={styled.wrapper}>
				<p>Указать с НДФЛ</p>
				<Form.Check
					onChange={e => handleSwitch(e)}
					type="switch"
					id="custom-switch"
				/>
				<p>Без НДФЛ</p>
			</div>
		</Form>
	)
}

export default SwitchControl
