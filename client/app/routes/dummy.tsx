import type { MetaFunction } from '@remix-run/cloudflare'
import { Link } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [
    { title: 'ryushiaok.dev' },
    {
      name: 'description',
      content: 'Welcome to Remix! Using Vite and Cloudflare!',
    },
  ]
}

export default function Index() {
  return (
    <>
      <Link
        to={'/'}
        unstable_viewTransition
      >
        <img height="450" alt="tetris" src="https://github.com/RyushiAok/Tetris/assets/55625375/c1bde67b-885d-4967-b69b-736600743bac" />
      </Link>
    </>
  )
}
