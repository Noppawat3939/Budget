import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components"
import { ROUTE_PATH } from "../../constants"

const StartPage: FC = () => {
	const navigate = useNavigate()
	const goToHome = () => navigate(ROUTE_PATH.HOME)

	return (
		<div className="container mx-auto">
			StartPage
			<Button text="home" onClick={goToHome} />
		</div>
	)
}

export default StartPage
