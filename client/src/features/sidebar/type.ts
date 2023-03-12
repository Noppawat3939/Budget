import { BoxProps, FlexProps } from "@chakra-ui/react"
import { IconType } from "react-icons"

export interface LinkItemProps {
	name: string
	icon: IconType
}

export interface SidebarProps {
	children: JSX.Element
}

export interface SidebarContentProps extends BoxProps {
	onClose: () => void
	linkItems: LinkItemProps[]
}

export interface NavItemProps extends FlexProps {
	icon: IconType
	children: string
}

export interface MobileProps extends FlexProps {
	onOpen: () => void
}
