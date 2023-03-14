import { Box, Text, Divider } from "@chakra-ui/react"
import { FC, memo } from "react"
import { IoIosArrowDown } from "react-icons/io"
import { SelectOptionProps } from "./type"

const SelectOption: FC<SelectOptionProps> = (props) => {
	const { options, onOpen, isOpen, onClose, onSelect, ...rest } = props

	return (
		<Box onClick={isOpen ? onClose : onOpen} {...rest}>
			<Box className="flex items-center py-2 uppercase text-sm justify-between cursor-pointer ease-in-out duration-300 hover:text-gray-500">
				selected categories
				<IoIosArrowDown
					className={`${
						isOpen ? "rotate-180" : "rotate-0"
					} ease-in-out duration-300`}
				/>
			</Box>
			<Box
				className={`${isOpen ? "h-20" : "max-h-0"} overflow-scroll
				}`}
			>
				{options?.map((option) => (
					<Box
						key={option.value}
						onClick={() => {
							onSelect({
								value: option.value,
								direction: option.direction,
							})
						}}
						className="cursor-pointer hover:bg-gray-100"
					>
						<Text p={2}>{option.value}</Text>
						<Divider />
					</Box>
				))}
			</Box>
		</Box>
	)
}

export default memo(SelectOption)
