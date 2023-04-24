import React from "react"

import "./styles/global.scss"
import ControlPanel from "./Pages/ControlPanel"

const App:React.FC = () => {
	return (
		<div className={"container"}>
			<ControlPanel/>
		</div>
	)
}

export default App
