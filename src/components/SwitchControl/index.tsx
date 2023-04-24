import React from "react"
import Form from "react-bootstrap/Form"
import styled from "./SwitchControl.module.scss"

const SwitchControl = ({handleSwitch, withTax}) => {
	return (
		<Form>
			<div className={styled.wrapper}>
				<p>Указать с НДФЛ</p>
				<Form.Check
					onChange={handleSwitch}
					type="switch"
					id="custom-switch"
				/>
				<p>Без НДФЛ</p>
			</div>
		</Form>
	)
}

export default SwitchControl
