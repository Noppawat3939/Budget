import {
	Modal as ModalChakra,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react"
import { ComponentProps, FC, memo, ReactNode } from "react"
import Button from "../button/Button"

interface ModalProps extends ComponentProps<typeof ModalChakra> {
	isOpen: boolean
	onClose: () => void
	children: ReactNode
	title: string
}

const Modal: FC<ModalProps> = (props) => {
	const { isOpen, title, onClose, children, ...rest } = props

	return (
		<ModalChakra isOpen={isOpen} onClose={onClose} {...rest}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader textTransform="capitalize">{title}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>{children}</ModalBody>
				<ModalFooter>
					<Button
						colorScheme="whatsapp"
						mr={3}
						onClick={onClose}
						fontSize={13}
						textTransform="uppercase"
						padding={3}
						text="add new budget"
					/>
				</ModalFooter>
			</ModalContent>
		</ModalChakra>
	)
}

export default memo(Modal)
