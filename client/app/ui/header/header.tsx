import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Container, Flex, Heading } from '@radix-ui/themes'
import { useEffect, useState } from 'react'
import { headerStyle } from './header-style.css'

const useScroll = () => {
	const [lastScrollY, setLastScrollY] = useState(0)
	const [scrollDiffY, setScrollDiffY] = useState(0)
	const [isBottom, setIsBottom] = useState(false)
	const handleScroll = () => {
		const currentScrollY = window.scrollY
		const maxScrollY = document.body.scrollHeight - window.innerHeight
		setScrollDiffY(currentScrollY - lastScrollY)
		setLastScrollY(currentScrollY)
		setIsBottom(currentScrollY >= maxScrollY)
	}
	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [handleScroll])
	return { scrollDiffY, isBottom }
}

export const Header = () => {
	const { scrollDiffY, isBottom } = useScroll()
	const isScrollingDown = scrollDiffY > 0
	const visibility = isScrollingDown && !isBottom ? 'hidden' : 'visible'
	return (
		<Container position="fixed" className={[headerStyle[visibility]].join(' ')}>
			<Flex justify="between" py="2" px="5">
				<Flex gap="4" align="center">
					{/* <Avatar
					src="https://avatars.githubusercontent.com/u/55625375?v=4"
					fallback="A"
					size={"2"}
				/> */}
					<Heading size="3">RyushiAok.dev</Heading>
				</Flex>
				<Flex gap="4" align="center">
					<a
						href="https://github.com/RyushiAok"
						target="_blank"
						rel="noopener noreferrer"
						style={{
							display: 'flex',
							textDecoration: 'none',
							color: 'white',
						}}
					>
						<GitHubLogoIcon width="1.25em" height="1.25em" />
					</a>
				</Flex>
			</Flex>
		</Container>
	)
}
