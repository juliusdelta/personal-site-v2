import React from 'react'
import { Flex } from "@theme-ui/components"

const Footer = () => (
  <Flex
    as="footer"
    sx={{
      variant: `dividers.top`,
      justifyContent: `space-between`,
      mt: [6],
      color: `secondary`,
      a: {
        variant: `links.secondary`,
      },
      flexDirection: [`column`, `column`, `row`],
    }}
  >
    <div>
      &copy; {new Date().getFullYear()} by jd. All rights reserved.
    </div>
  </Flex>
)

export default Footer;
