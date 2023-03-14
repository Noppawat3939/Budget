import { Box } from "@chakra-ui/react"
import { ComponentPropsWithoutRef } from "react"

export interface SelectOptionProps
	extends ComponentPropsWithoutRef<typeof Box> {
	options: Array<{ value: string; direction: string }>
	onOpen: () => void
	onClose: () => void
	onSelect: (newValue: { value: string; direction: string }) => void
	isOpen: boolean
}
