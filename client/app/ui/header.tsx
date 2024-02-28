import { GitHubLogoIcon } from '@radix-ui/react-icons'
import { Avatar, Container, Flex } from '@radix-ui/themes'
import { Heading } from 'node_modules/@radix-ui/themes/dist/cjs'
export const Header = () => (
  <Container
    size={'2'}
    position="fixed"
    style={{
      zIndex: 100,
      padding: '0.5rem 0',
      opacity: 0.985,
      backdropFilter: 'blur(0.25rem)',
      top: 0,
      left: 0,
      right: 0,
      overscrollBehaviorY: 'contain',
    }}
  >
    <Flex justify="between">
      <Flex gap="4" align="center" pl="2">
        <Avatar
          src="https://avatars.githubusercontent.com/u/55625375?v=4"
          fallback="A"
          size={'2'}
        />
        <Heading size="3">RyushiAok.dev</Heading>
      </Flex>
      <Flex gap="4" pr="2" align="center">
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
          <GitHubLogoIcon width="1em" height="1em" />
        </a>
      </Flex>
    </Flex>
  </Container>
)
