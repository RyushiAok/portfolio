import { Avatar, Container, Flex } from '@radix-ui/themes'
import { Heading } from 'node_modules/@radix-ui/themes/dist/cjs'
export const Header = () => (

  <Container size={'2'}>
    <Flex position="fixed" justify={'between'} align={'center'} style={{
      zIndex: 100,
      padding: "0.5rem 0",
      width: "100%",
      opacity: 0.985,
      backdropFilter: "blur(0.25rem)",
      top: 0,
      // backgroundColor: "rgba(255, 255, 255, 0.85)",
      overscrollBehaviorY: "contain",
    }}>
      <Flex gap="4" align={'center'}>
        <Avatar
          src="https://avatars.githubusercontent.com/u/55625375?v=4"
          fallback="A"
          size={'2'}
        />
        <Heading align="center" size={'3'}>
          RyushiAok.dev
        </Heading>
      </Flex>
      {/* <Flex gap="4">
      <HamburgerMenuIcon />
    </Flex> */}
    </Flex>
  </Container>
)