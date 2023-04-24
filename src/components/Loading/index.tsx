import React from "react"
import {Card, Placeholder} from "react-bootstrap"

const Loading = () => {
	return (
		<Placeholder as={Card.Text} animation="wave">
			<Placeholder size="lg" xs={1} /> <Placeholder size="lg" xs={10} />
		</Placeholder>
	)
}

export default Loading
