import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Avatar, Flex, Heading } from '@radix-ui/themes'
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

const IconLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'flex',
      textDecoration: 'none',
      color: 'white',
    }}
  >
    {children}
  </a>
)

export const Header = () => {
  const { scrollDiffY } = useScroll()
  const isScrollingDown = scrollDiffY > 0
  const visibility = isScrollingDown ? 'hidden' : 'visible'
  return (
    <header className={[headerStyle[visibility]].join(' ')}>
      <Flex justify="between" py="2" px="4">
        <Flex gap="4" align="center">
          <Avatar size='2' src="https://avatars.githubusercontent.com/u/55625375?v=4" alt="Icon" fallback={'A'} />
          <Heading size="3">RyushiAok</Heading>
        </Flex>
        <Flex gap="4" align="center">
          <IconLink href="https://github.com/RyushiAok">
            <GitHubLogoIcon width="1.5em" height="1.5em" />
          </IconLink>
        </Flex>
      </Flex>
    </header>
  )
}
