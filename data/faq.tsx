import * as React from 'react'

const faq = {
  title: 'Frequently asked questions',
  // description: '',
  items: [
    {
      q: 'How many projects can I use BlockchainPay Pro for?',
      a: (
        <>
          The single license can be used for one commercial blockchain application or payment solution and unlimited internal tools. 
          You can buy as many licenses as needed. <br /> 
          The unlimited license does not have any restrictions.
        </>
      ),
    },
    {
      q: 'Can I use BlockchainPay Pro for client work?',
      a: "Yes, absolutely! You can use it for client projects as long as it aligns with the license you purchase.",
    },
    {
      q: 'Can I use BlockchainPay Pro for Open Source projects?',
      a: 'No, not currently. However, many components of BlockchainPay Pro are built on open standards and technologies, ensuring compatibility with open source ecosystems.',
    },
    {
      q: 'Does BlockchainPay Pro support custom branding for my payment app?',
      a: 'Yes, BlockchainPay Pro allows you to customize themes and components to match your brand identity, providing a tailored experience for your users.',
    },
    
  ],
}

export default faq
