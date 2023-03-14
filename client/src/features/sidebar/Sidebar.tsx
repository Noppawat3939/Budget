import { FC, memo } from "react"
import {
	Box,
	useColorModeValue,
	Drawer,
	DrawerContent,
	useDisclosure,
} from "@chakra-ui/react"
import { FiHome, FiStar, FiSettings } from "react-icons/fi"
import { LinkItemProps, SidebarProps } from "./type"
import { MobileNav, SidebarContent } from "./common"

const LinkItems: Array<LinkItemProps> = [
	{ name: "Home", icon: FiHome },
	{ name: "favorite", icon: FiStar },
	{ name: "Settings", icon: FiSettings },
]

const Sidebar: FC<SidebarProps> = (props) => {
	const { children } = props

	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
			<SidebarContent
				onClose={() => onClose}
				linkItems={LinkItems}
				display={{ base: "none", md: "block" }}
			/>
			<Drawer
				autoFocus={false}
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				returnFocusOnClose={false}
				onOverlayClick={onClose}
				size="full"
			>
				<DrawerContent>
					<SidebarContent linkItems={LinkItems} onClose={onClose} />
				</DrawerContent>
			</Drawer>
			<MobileNav onOpen={onOpen} />
			<Box ml={{ base: 0, md: 60 }} p="4">
				{children}
			</Box>
		</Box>
	)
}

export default memo(Sidebar)
