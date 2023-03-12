import { Button } from "@chakra-ui/react"
import { ComponentProps } from "react"

export interface ButtonProps extends ComponentProps<typeof Button> {
	text: string
	size?: string
	borderRadius?: number
}
