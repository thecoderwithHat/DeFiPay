import { HStack, Text } from '@chakra-ui/react';

export default {
  title: 'Property Payment Solutions',
  description:
    "Discover the perfect set of properties to elevate your blockchain-powered property payment experience.",
  plans: [
    {
      id: 'prop1',
      title: '5 BHK Flat',
      description: 'Essential features to get started with blockchain property payments.',
      price: '50 BTC',
      imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkyo6Pzg_B1UXn7y5IM2UetS3YAf-R0khNnw&s',
      features: [
        {
          title: 'Power Backup',
        },
        {
          title: 'Lift',
        },
        {
          title: 'Rain-water Harvesting',
        },
        {
          title: 'Vaastu Compliant',
        },
        {
          title: 'Basic Analytics for Property Payments',
        },
        {
          title: 'Thriving Community ',
        },
        {
          title: 'And more...',
        },
      ],
      action: {
        href: '#',
      },
      secondaryAction: {
        href: '#'
      }
    },
    {
      id: 'prop2',
      title: '2 BHK Flat',
      description:
        'Comprehensive features for teams scaling their blockchain property payment solutions.',
      price: '25 BTC',
      imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkyo6Pzg_B1UXn7y5IM2UetS3YAf-R0khNnw&s',
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
      secondaryAction: {
        href: '#'
      }

    },
    {
      id: 'prop3',
      title: '300 Sq yard Villa',
      description:
        'Unlimited access and premium features for large teams and enterprises in the property payments sector.',
        imageSrc:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkyo6Pzg_B1UXn7y5IM2UetS3YAf-R0khNnw&s',
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
            35 BTC,-
          </Text>
          <Text>30 BTC</Text>
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
      secondaryAction: {
        href: '#'
      }
    },
  ],
};


