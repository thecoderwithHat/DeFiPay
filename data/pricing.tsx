import { HStack, Text } from '@chakra-ui/react';

export default {
  title: 'Properties',
  description:
    'Discover the perfect set of properties to elevate your blockchain payment experience..',
  plans: [
    {
      id: 'basic',
      title: 'Basic Access',
      description: 'Essential features to get started with blockchain payments.',
      price: 'Free',
      features: [
        {
          title: 'MIT License',
        },
        {
          title: 'Authentication Support (Clerk/Supabase/Magic)',
        },
        {
          title: 'Simple Payment Processing',
        },
        {
          title: 'Web3 Wallet Integration',
        },
        {
          title: 'Basic Analytics Dashboard',
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
      id: 'team',
      title: 'Team Access',
      description:
        'Comprehensive features for small teams scaling their payment solutions.',
      price: 'Free',
      isRecommended: false,
      features: [
        {
          title: 'Support for Multiple Projects',
        },
        {
          title: 'Multi-Developer Collaboration',
        },
        {
          title: 'Advanced Analytics and Reporting',
        },
        {
          title: 'Customizable Themes',
        },
        {
          title: 'Next.js and Blockchain Boilerplates',
        },
        {
          title: 'Private Support Community',
        },
        {
          title: '1 Year of Updates',
        },
        null,
        // {
        //   title: 'Priority Feature Requests',
        //   iconColor: 'green.500',
        // },
      ],
      action: {
        href: '#',
      },
    },
    {
      id: 'enterprise',
      title: 'Enterprise Access',
      description:
        'Unlimited access and premium features for large teams and enterprises.',
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
          title: 'Unlimited Projects',
        },
        {
          title: 'Unlimited Developers',
        },
        {
          title: 'Lifetime Updates',
        },
        {
          title: 'Everything from Team Access',
        },
        null,
        // {
        //   title: 'Dedicated Onboarding and Support',
        //   iconColor: 'green.500',
        // },
      ],
      action: {
        href: '#',
      },
    },
  ],
};
