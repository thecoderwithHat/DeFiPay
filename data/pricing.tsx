import { HStack, Text } from '@chakra-ui/react';

export default {
  title: 'Property Payment Solutions',
  description:
    "Discover the perfect set of properties to elevate your blockchain-powered property payment experience.",
  plans: [
    {
      id: 'starter',
      title: 'Starter Access',
      description: 'Essential features to get started with blockchain property payments.',
      price: 'Free',
      features: [
        {
          title: 'MIT License',
        },
        {
          title: 'Blockchain Property Transaction Support',
        },
        {
          title: 'Property Payment Processing',
        },
        {
          title: 'Web3 Wallet Integration',
        },
        {
          title: 'Basic Analytics for Property Payments',
        },
        {
          title: 'Community Support',
        },
        {
          title: 'And more...',
        },
      ],
      action: {
        href: '#',
      },
    },
    {
      id: 'business',
      title: 'Business Access',
      description:
        'Comprehensive features for teams scaling their blockchain property payment solutions.',
      price: 'Free',
      isRecommended: true,
      features: [
        {
          title: 'Support for Multiple Property Transactions',
        },
        {
          title: 'Multi-Developer Collaboration',
        },
        {
          title: 'Advanced Property Payment Analytics',
        },
        {
          title: 'Customizable Themes for Property Payment UI',
        },
        {
          title: 'Next.js and Blockchain Property Payment Boilerplates',
        },
        {
          title: 'Private Support Community',
        },
        {
          title: '1 Year of Updates',
        },
        null,
      ],
      action: {
        href: 'https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Single%20license',
      },
    },
    {
      id: 'premium',
      title: 'Premium Access',
      description:
        'Unlimited access and premium features for large teams and enterprises in the property payments sector.',
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            €999,-
          </Text>
          <Text>€499,-</Text>
        </HStack>
      ),
      features: [
        {
          title: 'Unlimited Property Projects',
        },
        {
          title: 'Unlimited Developers',
        },
        {
          title: 'Lifetime Updates for Property Payment Features',
        },
        {
          title: 'Everything from Business Access',
        },
        null,
      ],
      action: {
        href: 'https://appulse.gumroad.com/l/saas-ui-pro-pre-order?variant=Single%20license',
      },
    },
  ],
};


