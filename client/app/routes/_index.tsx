import { whiteA } from '@radix-ui/colors'
import { Box, Container, Flex, Heading, Separator } from '@radix-ui/themes'
import type { MetaFunction } from '@remix-run/cloudflare'
import { ReadMore } from '~/ui/link'
// https://remix.run/docs/en/2.1.0/components/link#unstable_viewtransition

export const meta: MetaFunction = () => {
  return [
    { title: 'ryushiaok.dev' },
    {
      name: 'description',
      content: 'Welcome to Remix! Using Vite and Cloudflare!',
    },
  ]
}

const dummy_text =
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. '

const Tag = ({
  logo,
}: {
  logo: 'F#' | 'Terraform' | 'FuncUI'
}) => {
  const src = (() => {
    switch (logo) {
      case 'F#': {
        return '/logo/fs_logo.svg'
      }
      case 'Terraform': {
        return '/logo/tf_logo.svg'
      }
      case 'FuncUI': {
        return '/logo/FuncUI.svg'
      }
    }
  })()
  return (
    <>
      <Flex
        align="center"
        gap="1"
        style={{
          color: whiteA.whiteA9,
          fontSize: '0.875rem',
          fontWeight: 700,
          // textTransform: 'uppercase',
          padding: '0.25rem 0.5rem',
          borderRadius: '1rem',
          border: `1px solid ${whiteA.whiteA3}`,
        }}
      >
        <img
          alt="xxx"
          src={src}
          width="16"
          style={{
            // if funcui then scale 1.5
            transform: logo === 'FuncUI' ? 'scale(2.2)' : 'scale(1)',
          }}
        />
        <Box>{logo}</Box>
      </Flex>
    </>
  )
}

const Work = ({
  title,
  tags,
}: {
  title: string
  tags: ('F#' | 'Terraform' | 'FuncUI')[]
}) => {
  return (
    <>
      <Box px="1" py="5">
        <Flex align="baseline" gap="3" direction="row" justify="start">
          <Flex align="center">
            <Heading size="8">{title}</Heading>
          </Flex>
        </Flex>
        <Separator size="4" my="3" />
        <Flex direction="row" gap="3">
          {tags.map((tag) => (
            <Tag logo={tag} />
          ))}
        </Flex>
        <Box py="4">
          <Heading
            size="4"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {dummy_text}
          </Heading>
        </Box>
        <Box>
          <Flex justify="end" align="center">
            <ReadMore />
          </Flex>
        </Box>
      </Box>
    </>
  )
}

export default function Index() {
  return (
    <>
      <Container size="2" px="1" pt="6">
        <Heading size="9">Works</Heading>
        <Work title="Tetris" tags={['F#', 'FuncUI']} />
        <Work title="MorPhoto" tags={['F#']} />
        <Work title="DuckStream" tags={['F#', 'Terraform']} />
        <Work title="Toolbox" tags={['F#']} />
      </Container>
    </>
  )
}
