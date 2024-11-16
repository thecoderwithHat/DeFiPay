'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Image,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
// import Image from 'next/image'
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ChakraLogo, NextjsLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

// export const meta: Metadata = {
//   title: 'Saas UI Landingspage',
//   description: 'Free SaaS landingspage starter kit',
// }

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      {/* <TestimonialsSection /> */}

      <PricingSection />

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Seamless Property Transactions
                <Br /> Powered by Aptos
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Buy, Sell, and Manage <Em>Properties</Em>
                <Br /> Securely with Blockchain <Br />{' '}
                {/* build intuitive SaaS products with speed. */}
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  Connect Wallet
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="#"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  Check Price
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="https://images.unsplash.com/photo-1729838904523-b31bdb286cdc?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={1180}
                  height={762}
                  rounded="lg"
                  shadow="lg"
                  alt="Screenshot of a ListPage in Saas UI Pro"
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'Blockchain-Powered Transactions',
            icon: FiSmile,
            description:
              'Leverage the security and transparency of Aptos blockchain for every property purchase, ensuring trust and reliability.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'Customizable Payment Flows',
            icon: FiSliders,
            description:
              'Fully customize the property payment process to match your brand, with seamless integration to Aptos blockchain for smooth transactions.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Dynamic Property Listings',
            icon: FiGrid,
            description:
              'Easily create and manage property listings on the Aptos blockchain, allowing for secure and decentralized transactions.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Fast and Secure Payments',
            icon: FiThumbsUp,
            description:
              'With Aptos blockchain, enjoy faster, low-cost, and highly secure property payments, optimizing the buying experience for users.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Core components">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Get started for free with <Em>30+ open source components</Em>.
            Including authentication screens with Clerk, Supabase and Magic.
            Fully functional forms with React Hook Form. Data tables with React
            Table.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{' '}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Solid foundations">
        <Text color="muted" fontSize="lg">
          We don’t believe in reinventing the wheel, and neither should you.
          We’ve built our property buying platform on the powerful and secure
          Aptos blockchain, using the most reliable tools in the industry to
          ensure a seamless and efficient experience.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={['pink.200', 'purple.500']}
      >
        Using this app built on Aptos, we were
        able to streamline our transactions and ensure secure property transfers
        with ease. It saved us countless hours in manual processes and allowed
        us to focus on enhancing the user experience while ensuring smooth and
        transparent property deals from start to finish.
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Start your next idea two steps ahead"
      >
        <Text color="muted" fontSize="lg">
        We’ve handled all your blockchain integration and property management needs, so you can focus on creating unique features that enhance the property buying and selling experience.
        </Text>
        <Wrap mt="8">
          {[
           "authentication",
           "secure transactions",
           "smart contract integration",
           "property listings",
           "transaction history",
           "payment processing (Aptos Blockchain)",
           "real-time blockchain data",
           "property ownership verification",
           "blockchain wallet management",
           "multi-currency support (for property payments)",
           "property search & filters",
           "smart contract automation",
           "user onboarding (blockchain focused)",
           "blockchain-based property transfers",
           "transaction analytics",
           "legal compliance (blockchain)",
           "mobile responsiveness",
           "property deal notifications",
           "multi-language support",
           "decentralized identity (DID) integration"
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Redefining <br /> Property Payments with Blockchain
        </Heading>
      }
      description={
        <>
          Get everything you need to revolutionize property transactions.
          <br />
          Use it as the backbone for your next blockchain-powered property app
          or as the foundation for a secure and modern real estate payment
          system.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Secure Property Transactions.',
          icon: FiBox,
          description:
            'Effortless property payments with end-to-end encryption on the blockchain, ensuring every transaction is private, secure, and immutable.',
          variant: 'inline',
        },
        {
          title: 'Quick Start Property Kits.',
          icon: FiLock,
          description:
            'Pre-built templates for property transactions, blockchain authentication, and seamless payment flows for fast integration with Next.js and TypeScript.',
          variant: 'inline',
        },
        {
          title: 'Comprehensive Blockchain Documentation.',
          icon: FiSearch,
          description:
            'In-depth guides and API references to help you understand and implement blockchain-based property payments and real estate transactions.',
          variant: 'inline',
        },
        {
          title: 'Property Onboarding.',
          icon: FiUserPlus,
          description:
            'Simplify property transactions with guided user flows, enabling wallet setup and property payments in just minutes.',
          variant: 'inline',
        },
        {
          title: 'Property Payment Flags.',
          icon: FiFlag,
          description:
            'Manage property payment toggles for various currencies and transaction modes. Easily integrate with blockchain networks for flexible configuration.',
          variant: 'inline',
        },
        {
          title: 'Transaction Insights for Properties.',
          icon: FiTrendingUp,
          description:
            'Built-in analytics to track trends in property transactions, payment flows, and user engagement, offering valuable insights into real estate activity.',
          variant: 'inline',
        },
        {
          title: 'Customizable Themes for Real Estate Apps.',
          icon: FiToggleLeft,
          description:
            'Multiple themes designed for property dealing apps with support for light and dark modes, offering a modern, user-friendly experience.',
          variant: 'inline',
        },
        {
          title: 'Blockchain Code Generators.',
          icon: FiTerminal,
          description:
            'Generate scalable, high-quality code for blockchain-based property transactions and payment flows, ensuring efficient development of real estate apps.',
          variant: 'inline',
        },
        {
          title: 'Blockchain Property Monorepo.',
          icon: FiCode,
          description: (
            <>
              All code is organized into high-performance packages in a{' '}
              <Link href="https://turborepo.com">Turborepo</Link>, providing
              complete control to tailor your property payment system to your
              unique needs.
            </>
          ),
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
