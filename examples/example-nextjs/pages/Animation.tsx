import { Box } from '@fower/react'

export default function App() {
  return (
    <Box toCenter column gap-100>
      <Box animateSpin square20 rounded2XL bgGradientX={['red400', 'orange400']} />

      <Box flex square3 relative>
        <Box animatePing absolute inlineFlex w-100p h-100p roundedFull bgGreen400--O75></Box>
        <Box
          relative
          inlineFlex
          roundedFull
          square3
          bgGreen500
          // duration-400
        ></Box>
      </Box>

      <Box border borderBlue300 shadow roundedMedium p4 w-100p mx-auto>
        <Box animatePulse flex gap4>
          <Box roundedFull bgBlue400 h12 w12></Box>
          <Box flex-1 gap4 py1>
            <Box h4 bgBlue400 rounded></Box>
            <Box gap2>
              <Box h4 bgBlue400 rounded></Box>
              <Box h4 bgBlue400 rounded></Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box circle20 bgOrange400 animateBounce></Box>
    </Box>
  )
}
