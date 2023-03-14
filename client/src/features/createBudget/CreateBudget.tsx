import { FC, memo, SetStateAction, useEffect, useState } from "react"
import {
	FormControl,
	FormLabel,
	Input,
	useDisclosure as useToggle,
} from "@chakra-ui/react"
import { SelectOption } from "../../components"
import axios from "axios"

const CreateBudget: FC = () => {
	//TODO: get categories from API
	const categories = [
		{
			value: "income",
			direction: "income",
		},
		{
			value: "food and drink",
			direction: "expend",
		},
		{
			value: "shopping",
			direction: "expend",
		},
	]

	useEffect(() => {
		;(async () => {
			await axios
				.get("https://localhost:4000/api/all-category")
				.then((res) => console.log("res", res))
				.catch((err) => console.log("error CreateBudget", err))
		})()
	}, [])

	const { isOpen, onOpen, onClose } = useToggle()

	const [categoryInput, setCategoryInput] = useState<string>("")
	const [isSelected, setIsSelected] = useState<{
		value: string
		direction: string
	}>({ value: "", direction: "" })

	const onCategoryChange = (event: {
		target: { value: SetStateAction<string> }
	}) => {
		setCategoryInput(event.target.value)
	}

	const onSelected = (newValue: { value: string; direction: string }) =>
		setIsSelected(newValue)

	return (
		<FormControl>
			<FormLabel>category</FormLabel>
			<Input value={categoryInput} onChange={onCategoryChange} />
			<SelectOption
				onOpen={onOpen}
				options={categories}
				isOpen={isOpen}
				onClose={onClose}
				m={1}
				onSelect={onSelected}
			/>
		</FormControl>
	)
}

export default memo(CreateBudget)
