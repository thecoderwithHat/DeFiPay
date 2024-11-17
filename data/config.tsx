import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Saas UI',
    description: 'Empowering startups with the ultimate React toolkit for seamless development',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      // {
      //   label: 'Login',
      //   href: '/login',
      // },
      {
        label: 'Connect Wallet',
        href: '/',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{' '}
        <Link href="https://twitter.com/Pagebakers">MatrixUnfolded</Link>
      </>
    ),
    links: [
      {
        href: 'https://www.linkedin.com/in/krishnav-kanoi-3ba53a217/',
        label: 'Contact',
      },
      // {
      //   href: 'https://twitter.com/saas_js',
      //   label: <FaTwitter size="14" />,
      // },
      {
        href: 'https://github.com/thecoderwithHat/DeFiPay',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Blockchain-Backed Transactions',
        description: 'All property transactions are secured and validated through the Aptos blockchain, ensuring transparency and trust for every purchase.',
      },
      {
        icon: FiCheck,
        title: 'Customizable Payment Flows',
        description: 'Tailor the payment process to your brand’s needs with full theme customization, while leveraging Aptos blockchain for seamless property payments.',
      },
      {
        icon: FiCheck,
        title: 'Composable Property Listings',
        description: 'Create dynamic property listings that integrate directly with the Aptos blockchain for secure and efficient payments, customizable to suit different property types.',
      },
      {
        icon: FiCheck,
        title: 'Fast and Secure Payments',
        description: 'Built for efficiency, this solution uses the Aptos blockchain to process property payments quickly, securely, and with low transaction fees.',
      },
      
    ],
  },
}

export default siteConfig
