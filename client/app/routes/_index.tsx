import { whiteA } from "@radix-ui/colors";
import {
  Box,
  Container,
  Flex,
  Heading,
  Separator,
  Text,
} from "@radix-ui/themes";
import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import { ReactNode } from "react";
import { ReadMore } from "~/ui/link";
// https://remix.run/docs/en/2.1.0/components/link#unstable_viewtransition

export const meta: MetaFunction = () => {
  return [
    { title: "ryushiaok.dev" },
    {
      name: "description",
      content: "Welcome to Remix! Using Vite and Cloudflare!",
    },
  ];
};

const dummy_text = (
  <>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
    ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
    parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
    pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
  </>
);

const Tag = ({
  logo,
}: {
  logo: "F#" | "Terraform" | "FuncUI";
}) => {
  const src = (() => {
    switch (logo) {
      case "F#": {
        return "/logo/fs_logo.svg";
      }
      case "Terraform": {
        return "/logo/tf_logo.svg";
      }
      case "FuncUI": {
        return "/logo/FuncUI.svg";
      }
    }
  })();
  return (
    <>
      <Flex
        align="center"
        gap="1"
        style={{
          color: whiteA.whiteA9,
          fontSize: "0.875rem",
          fontWeight: 700,
          // textTransform: 'uppercase',
          padding: "0.25rem 0.5rem",
          borderRadius: "1rem",
          border: `1px solid ${whiteA.whiteA3}`,
        }}
      >
        <img
          alt="xxx"
          src={src}
          width="16"
          style={{
            // if funcui then scale 1.5
            transform: logo === "FuncUI" ? "scale(2.2)" : "scale(1)",
          }}
        />
        <Box>{logo}</Box>
      </Flex>
    </>
  );
};

const Work = ({
  title,
  tags,
  summary,
}: {
  title: string;
  tags: ("F#" | "Terraform" | "FuncUI")[];
  summary: ReactNode;
}) => {
  return (
    <>
      <Box px="1" py="4">
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
        <Box pt="3" pb="2">
          <Text
            size="3"
            weight="medium"
            style={{
              overflow: "break-word",
            }}
          >
            {summary}
          </Text>
        </Box>
        <Box>
          <Flex justify="end" align="center">
            <ReadMore />
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default function Index() {
  return (
    <>
      <Container size="2" px="1" pt="6">
        <Heading size="9" mb="6">
          Works
        </Heading>
        <Work
          title="Tetris"
          tags={["F#", "FuncUI"]}
          summary={
            <>
              F# Tetris implementation with special spinnable support and Elmish
              state management through Avalonia.FuncUI. This has been added to
              the official
              <Text weight="bold" mx="1">
                <Link to="https://github.com/fsprojects/Avalonia.FuncUI">
                  fsprojects/Avalonia.FuncUI
                </Link>
              </Text>
              repository as an example 🎉
            </>
          }
        />
        <Work
          title="MorPhoto"
          tags={["F#"]}
          summary={
            <>
              <Text weight="bold" mr="1">
                <Link to="https://www.morphoto.app/create">MorPhoto</Link>
              </Text>
              is a AI-Driven Morphing Photographs Service. This service that
              allows you to generate images by inputting an initial image and
              prompt. So why not have some fun and freely transform SNS icons,
              header images, and more? Once you've crafted some intriguing
              images, don't hesitate to share them with others!
            </>
          }
        />
        <Work
          title="DuckStream"
          tags={["F#", "Terraform"]}
          summary={
            <>
              The application we developed for the
              <Text weight="bold" mx="1">
                <Link to="https://blog.camph.net/news/kamogawa-hackathon-2023/">
                  Kamogawa Hackathon
                </Link>
              </Text>
              uses location data to create line drawings, which are then
              transformed by a diffusion model. Walking along the banks of the
              Kamogawa River for debugging was a highlight for me.
            </>
          }
        />
      </Container>
    </>
  );
}
