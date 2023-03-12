import { FC, memo } from "react"
import { Button as ButtonChakra } from "@chakra-ui/react"
import { ButtonProps } from "./type"

const Button: FC<ButtonProps> = (props) => {
	const { text, size = "md", borderRadius = 20, ...rest } = props

	return (
		<ButtonChakra
			size={size}
			variant="solid"
			colorScheme="gray"
			borderRadius={borderRadius}
			{...rest}
		>
			{text}
		</ButtonChakra>
	)
}

export default memo(Button)
