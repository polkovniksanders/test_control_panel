import React from "react"
import { useState, useRef } from "react"
import Overlay from "react-bootstrap/Overlay"
import {Badge, Button, OverlayTrigger, Tooltip} from "react-bootstrap"
import CloseButton from "react-bootstrap/CloseButton"


type THint = {
	text: string | null
}

const Hint = ({text} : THint) => {
	const [show, setShow] = useState(false)
	const target = useRef(null)

	return (
		<>
			<CloseButton />
			<>
				<OverlayTrigger
					placement={"right"}
					overlay={
						<Tooltip id={"tooltip-right"}>
							{text}
						</Tooltip>
					}
				>
					<Badge
						ref={target}
						onClick={() => setShow(!show)}
						pill bg="secondary"
					>
						i
					</Badge>
				</OverlayTrigger>
				
			</>
		</>
	)
}




export default Hint
