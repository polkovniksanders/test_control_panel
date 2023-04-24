import React from "react"
import Toast from "react-bootstrap/Toast"
import {NDFL_PERCENT} from "../../utils/settings"
import styled from "./Box.module.scss"

import T from "../Typography"
import Rub from "../Icons/Rub"

export type TSalary = {
	clean: number,
	tax: number,
	total: number,
}

const Box = ({salary} : TSalary) => {
	return (
		<Toast className={styled.toast}>
			<Toast.Body>
				<p>
					<T>{salary?.clean || ""} <Rub/> </T>
					сотрудник будет получать на руки
				</p>
			</Toast.Body>

			<Toast.Body>
				<p>
					<T>{salary?.tax || ""} <Rub/> </T>
					НДФЛ, {NDFL_PERCENT} от оклада
				</p>
			</Toast.Body>

			<Toast.Body>
				<p>
					<T>{salary?.total || ""} <Rub/> </T>
					за сотрудника в месяц</p>
			</Toast.Body>
		</Toast>
	)
}



export default Box
