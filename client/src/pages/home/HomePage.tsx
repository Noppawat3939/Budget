import { useDisclosure } from "@chakra-ui/react"
import { FC } from "react"
import { CreateBudget } from "../../features"
import { Button, Modal } from "../../components"

const HomePage: FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<div>
			HomePage
			<Button text="add budget" textTransform="capitalize" onClick={onOpen} />
			<Modal
				title="create new budget"
				isOpen={isOpen}
				onClose={onClose}
				closeOnOverlayClick={false}
				children={<CreateBudget />}
			/>
		</div>
	)
}

export default HomePage
