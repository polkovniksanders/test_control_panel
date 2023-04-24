import React, {CSSProperties} from "react"
import Toast from "react-bootstrap/Toast"

import T from "../Typography"
import Rub from "../Icons/Rub"
import Loading from "../Loading"
import {NDFL_PERCENT} from "../../utils/settings"
import styled from "./Box.module.scss"

export type TSalary = {
	clean?: number,
	tax?: number,
	total?: number,
}

const Box = (salary: TSalary) => {
	const {clean, tax, total} = salary

	const styledText: CSSProperties | undefined = {
		textOverflow: "ellipsis",
		overflow: "hidden",
		whiteSpace: "nowrap",
	}

	return (
		<Toast className={styled.toast}>
			<Toast.Body>
				<p style={styledText}>
					{clean ?
						<><T>{clean} <Rub/></T> сотрудник будет получать на руки </>
						: <Loading/>
					}
				</p>
			</Toast.Body>

			<Toast.Body>
				<p style={styledText}>
					{tax ?
						<><T>{tax} <Rub/></T> НДФЛ, {NDFL_PERCENT}% от оклада </>
						: <Loading/>
					}
				</p>
			</Toast.Body>

			<Toast.Body>
				<p style={styledText}>
					{total ?
						<><T>{total} <Rub/></T> за сотрудника в месяц</>
						: <Loading/>
					}
				</p>
			</Toast.Body>
			
		</Toast>
	)
}

export default Box
