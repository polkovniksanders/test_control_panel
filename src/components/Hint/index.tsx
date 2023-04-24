import React from "react"
import { useState, useRef } from "react"
import {Badge, OverlayTrigger, Tooltip} from "react-bootstrap"

type THint = {
	text: string | null
}

const Hint = ({text} : THint) => {
	const [show, setShow] = useState(false)
	const target = useRef(null)
	return (
		<OverlayTrigger
			onToggle={() => setShow(!show)}
			placement={"right"}
			overlay={<Tooltip id={"tooltip-right"}>
				{text}
			</Tooltip>}

		>
			<Badge
				style={{height: "20px", marginLeft: ".5rem"}}
				ref={target}
				onClick={() => setShow(!show)}
				pill bg="secondary"
			>
				i
			</Badge> 
		</OverlayTrigger>

	)
}




export default Hint
