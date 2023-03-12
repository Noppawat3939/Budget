import { createBrowserRouter } from "react-router-dom"
import { HomePage, StartPage } from "../pages"
import { ROUTE_PATH } from "../constants"
import { Sidebar } from "../features"

const router = createBrowserRouter([
	{
		path: ROUTE_PATH.MAIN,
		element: <StartPage />,
	},
	{
		path: ROUTE_PATH.HOME,
		element: (
			<Sidebar>
				<HomePage />
			</Sidebar>
		),
	},
])

export default router
