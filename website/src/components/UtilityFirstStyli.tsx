import React from 'react'
import { Box } from '@styli/react'

export const UtilityFirstStyli = () => {
  return (
    <Box toCenter bgGray200 h-200>
      <Box toCenterY p-20 w-300 bgWhite rounded-10>
        <Box as="img" s-60 rounded-8 src="/img/jobs.jpg" />
        <Box ml-10>
          <Box f-22 fontBold>
            Steve Jobs
          </Box>
          <Box gray800>Co-founder of Apple Inc.</Box>
        </Box>
      </Box>
    </Box>
  )
}
