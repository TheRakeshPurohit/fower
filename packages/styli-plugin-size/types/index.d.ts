import { StyliPlugin } from '@styli/types'

declare const _default: () => StyliPlugin
export default _default

declare module '@styli/types' {
  export interface AtomicProps {
    /**
     * Set width
     *
     * @example
     * ```tsx
     * <View w-10></View>
     * <View w-1rem></View>
     * <View w-10p></View>
     * <View w={10}></View>
     * <View w="10px 4px"></View>
     * <View w={a + b}></View>
     * ```
     */
    w?: PropValue

    /**
     * Set width
     *
     * NOTE: Theme restrict.

     *
     * w0 is `width: 0px`
     */
    w0?: boolean

    /**
     * Set width
     *
     * NOTE: Theme restrict.
     *
     * w1 is `width: 4px`
     */
    w1?: boolean

    /**
     * Set width
     *
     * NOTE: Theme restrict.
     *
     * w2 is `width: 8px`
     */
    w2?: boolean

    /**
     * Set width
     *
     * NOTE: Theme restrict.

     *
     * w3 is `width: 12px`
     */
    w3?: boolean

    /**
     * Set width
     *
     * NOTE: Theme restrict.

     *
     * w4 is `width: 16px`
     */
    w4?: boolean

    /**
     * Set width
     *
     * NOTE: Theme restrict.

     *
     * w5 is `width: 20px`
     */
    w5?: boolean

    /**
     * Set width
     *
     * NOTE: Theme restrict.

     *
     * w6 is `width: 24px`
     */
    w6?: boolean

    /**
     * Set width
     *
     * NOTE: Theme restrict.

     *
     * w7 is `width: 28px`
     */
    w7?: boolean

    /**
     * Set width
     *
     * NOTE: Theme restrict.

     *
     * w8 is `width: 32px`
     */
    w8?: boolean

    /**
     * Set width
     *
     * NOTE: Theme restrict.

     *
     * w9 is `width: 36px`
     */
    w9?: boolean

    w10?: boolean
    w11?: boolean
    w12?: boolean
    w13?: boolean
    w14?: boolean
    w15?: boolean
    w16?: boolean
    w17?: boolean
    w18?: boolean
    w19?: boolean
    w20?: boolean

    /**
     * Set height
     *
     * @example
     * ```tsx
     * <View h-10></View>
     * <View h-1rem></View>
     * <View h-10p></View>
     * <View h={10}></View>
     * <View h="10px 4px"></View>
     * <View h={a + b}></View>
     * ```
     */
    h?: PropValue

    /**
     * Set height
     *
     * NOTE: Theme restrict.

     *
     * h0 is `height: 0px`
     */
    h0?: boolean

    /**
     * Set height
     *
     * NOTE: Theme restrict.

     *
     * h1 is `height: 4px`
     */
    h1?: boolean

    /**
     * Set height
     *
     * NOTE: Theme restrict.

     *
     * h2 is `height: 8px`
     */
    h2?: boolean

    /**
     * Set height
     *
     * NOTE: Theme restrict.

     *
     * h3 is `height: 12px`
     */
    h3?: boolean

    /**
     * Set height
     *
     * NOTE: Theme restrict.

     *
     * h4 is `height: 16px`
     */
    h4?: boolean

    /**
     * Set height
     *
     * NOTE: Theme restrict.

     *
     * h5 is `height: 20px`
     */
    h5?: boolean

    /**
     * Set height
     *
     * NOTE: Theme restrict.

     *
     * h6 is `height: 24px`
     */
    h6?: boolean

    /**
     * Set height
     *
     * NOTE: Theme restrict.

     *
     * h7 is `height: 28px`
     */
    h7?: boolean

    /**
     * Set height
     *
     * NOTE: Theme restrict.

     *
     * h8 is `height: 32px`
     */
    h8?: boolean

    /**
     * Set height
     *
     * NOTE: Theme restrict.

     *
     * h9 is `height: 36px`
     */
    h9?: boolean

    h10?: boolean
    h11?: boolean
    h12?: boolean
    h13?: boolean
    h14?: boolean
    h15?: boolean
    h16?: boolean
    h17?: boolean
    h18?: boolean
    h19?: boolean
    h20?: boolean

    /**
     * Set square size
     *
     * square-10 is `width: 10px; height: 10px;`
     *
     * @example
     * ```tsx
     * <View square-10></View>
     * <View square-1rem></View>
     * <View square-10p></View>
     * <View square={a + b}></View>
     * ```
     */
    square?: PropValue

    /**
     * Set size
     *
     * NOTE: Theme restrict.

     *
     * s0 is `width: 0px; height: 0px`
     */
    square0?: boolean

    /**
     * Set size
     *
     * NOTE: Theme restrict.

     *
     * s1 is `width:4px; height: 4px`
     */
    square1?: boolean

    /**
     * Set size
     *
     * NOTE: Theme restrict.

     *
     * s2 is `width:8px; height: 8px`
     */
    square2?: boolean

    /**
     * Set size
     *
     * NOTE: Theme restrict.

     *
     * s3 is `width:12px; height: 12px`
     */
    square3?: boolean

    /**
     * Set size
     *
     * NOTE: Theme restrict.

     *
     * s4 is `width:16px; height: 16px`
     */
    square4?: boolean

    /**
     * Set size
     *
     * NOTE: Theme restrict.

     *
     * s5 is `width:20px; height: 20px`
     */
    square5?: boolean

    /**
     * Set size
     *
     * NOTE: Theme restrict.

     *
     * s6 is `width:24px; height: 24px`
     */
    square6?: boolean

    /**
     * Set size
     *
     * NOTE: Theme restrict.

     *
     * s7 is `width:28px; height: 28px`
     */
    square7?: boolean

    /**
     * Set size
     *
     * NOTE: Theme restrict.

     *
     * s8 is `width:32px; height: 32px`
     */
    square8?: boolean

    /**
     * Set size
     *
     * NOTE: Theme restrict.

     *
     * s9 is `width:36px; height: 36px`
     */
    square9?: boolean

    square10?: boolean
    square11?: boolean
    square12?: boolean
    square13?: boolean
    square14?: boolean
    square15?: boolean
    square16?: boolean
    square17?: boolean
    square18?: boolean
    square19?: boolean
    square20?: boolean

    /**
     * Set circle
     *
     * circle-10 is `width: 10px; height: 10px; border-radius: 10px`
     *
     * @example
     * ```tsx
     * <View circle-10></View>
     * <View circle-1rem></View>
     * <View circle-10p></View>
     * <View circle={a + b}></View>
     * ```
     */
    circle?: PropValue

    /**
     * Set circle
     *
     * NOTE: Theme restrict.

     *
     * circle0 is `width: 0px; height: 0px; border-radius: 0px`
     */
    circle0?: boolean

    /**
     * Set circle
     *
     * NOTE: Theme restrict.

     *
     * circle1 is `width:4px; height: 4px; border-radius: 4px`
     */
    circle1?: boolean

    /**
     * Set circle
     *
     * NOTE: Theme restrict.

     *
     * circle2 is `width:8px; height: 8px; border-radius: 8px`
     */
    circle2?: boolean

    /**
     * Set circle
     *
     * NOTE: Theme restrict.

     *
     * circle3 is `width:12px; height: 12px; border-radius: 12px`
     */
    circle3?: boolean

    /**
     * Set circle
     *
     * NOTE: Theme restrict.

     *
     * circle4 is `width:16px; height: 16px; border-radius: 16px`
     */
    circle4?: boolean

    /**
     * Set circle
     *
     * NOTE: Theme restrict.

     *
     * circle5 is `width:20px; height: 20px; border-radius: 20px`
     */
    circle5?: boolean
    /**
     * Set circle
     *
     * NOTE: Theme restrict.

     *
     * circle6 is `width:24px; height: 24px; border-radius: 24px`
     */
    circle6?: boolean

    /**
     * Set circle
     *
     * NOTE: Theme restrict.

     *
     * circle7 is `width:28px; height: 28px; border-radius: 28px`
     */
    circle7?: boolean

    /**
     * Set circle
     *
     * NOTE: Theme restrict.

     *
     * circle8 is `width:32px; height: 32px; border-radius: 32px`
     */
    circle8?: boolean

    /**
     * Set circle
     *
     * NOTE: Theme restrict.

     *
     * circle9 is `width:36px; height: 36px; border-radius: 36px`
     */
    circle9?: boolean

    circle10?: boolean
    circle11?: boolean
    circle12?: boolean
    circle13?: boolean
    circle14?: boolean
    circle15?: boolean
    circle16?: boolean
    circle17?: boolean
    circle18?: boolean
    circle19?: boolean
    circle20?: boolean

    /**
     * Set minWidth
     *
     * @example
     * ```tsx
     * <View minW-10></View>
     * <View minW-1rem></View>
     * <View minW-10p></View>
     * <View minW={10}></View>
     * <View minW="10px 4px"></View>
     * <View minW={a + b}></View>
     * ```
     */
    minW?: PropValue

    /**
     * Set minWidth
     *
     * NOTE: Theme restrict.

     *
     * minW0 is `min-width: 0px`
     */
    minW0?: boolean

    /**
     * Set minWidth
     *
     * NOTE: Theme restrict.

     *
     * minW1 is `min-width:4px`
     */
    minW1?: boolean

    /**
     * Set minWidth
     *
     * NOTE: Theme restrict.

     *
     * minW2 is `min-width:8px`
     */
    minW2?: boolean

    /**
     * Set minWidth
     *
     * NOTE: Theme restrict.

     *
     * minW3 is `min-width:12px`
     */
    minW3?: boolean

    /**
     * Set minWidth
     *
     * NOTE: Theme restrict.

     *
     * minW4 is `min-width:16px`
     */
    minW4?: boolean

    /**
     * Set minWidth
     *
     * NOTE: Theme restrict.

     *
     * minW5 is `min-width:20px`
     */
    minW5?: boolean

    /**
     * Set minWidth
     *
     * NOTE: Theme restrict.

     *
     * minW6 is `min-width:24px`
     */
    minW6?: boolean

    /**
     * Set minWidth
     *
     * NOTE: Theme restrict.

     *
     * minW7 is `min-width:28px`
     */
    minW7?: boolean

    /**
     * Set minWidth
     *
     * NOTE: Theme restrict.

     *
     * minW8 is `min-width:32px`
     */
    minW8?: boolean

    /**
     * Set minWidth
     *
     * NOTE: Theme restrict.

     *
     * minW9 is `min-width:36px`
     */
    minW9?: boolean

    minW10?: boolean
    minW11?: boolean
    minW12?: boolean
    minW13?: boolean
    minW14?: boolean
    minW15?: boolean
    minW16?: boolean
    minW17?: boolean
    minW18?: boolean
    minW19?: boolean
    minW20?: boolean

    /**
     * Set maxHeight
     *
     * @example
     * ```tsx
     * <View maxW-10></View>
     * <View maxW-1rem></View>
     * <View maxW-10p></View>
     * <View maxW={10}></View>
     * <View maxW="10px 4px"></View>
     * <View maxW={a + b}></View>
     * ```
     */
    maxW?: PropValue

    /**
     * Set maxWidth
     *
     * NOTE: Theme restrict.

     *
     * maxW0 is `max-width: 0px`
     */
    maxW0?: boolean

    /**
     * Set maxWidth
     *
     * NOTE: Theme restrict.

     *
     * maxW1 is `max-width: 4px`
     */
    maxW1?: boolean

    /**
     * Set maxWidth
     *
     * NOTE: Theme restrict.

     *
     * maxW2 is `max-width: 8px`
     */
    maxW2?: boolean

    /**
     * Set maxWidth
     *
     * NOTE: Theme restrict.

     *
     * maxW3 is `max-width: 12px`
     */
    maxW3?: boolean

    /**
     * Set maxWidth
     *
     * NOTE: Theme restrict.

     *
     * maxW4 is `max-width: 16px`
     */
    maxW4?: boolean

    /**
     * Set maxWidth
     *
     * NOTE: Theme restrict.

     *
     * maxW5 is `max-width: 20px`
     */
    maxW5?: boolean

    /**
     * Set maxWidth
     *
     * NOTE: Theme restrict.

     *
     * maxW6 is `max-width: 24px`
     */
    maxW6?: boolean

    /**
     * Set maxWidth
     *
     * NOTE: Theme restrict.

     *
     * maxW7 is `max-width: 28px`
     */
    maxW7?: boolean

    /**
     * Set maxWidth
     *
     * NOTE: Theme restrict.

     *
     * maxW8 is `max-width: 32px`
     */
    maxW8?: boolean

    /**
     * Set maxWidth
     *
     * NOTE: Theme restrict.

     *
     * maxW9 is `max-width: 36px`
     */
    maxW9?: boolean

    maxW10?: boolean
    maxW11?: boolean
    maxW12?: boolean
    maxW13?: boolean
    maxW14?: boolean
    maxW15?: boolean
    maxW16?: boolean
    maxW17?: boolean
    maxW18?: boolean
    maxW19?: boolean
    maxW20?: boolean

    /**
     * Set min-height
     *
     * @example
     * ```tsx
     * <View minH-10></View>
     * <View minH-1rem></View>
     * <View minH-10p></View>
     * <View minH={10}></View>
     * <View minH="10px 4px"></View>
     * <View minH={a + b}></View>
     * ```
     */
    minH?: PropValue

    /**
     * Set min-height
     *
     * NOTE: Theme restrict.

     *
     * minH0 is `min-height: 0px`
     */
    minH0?: boolean

    /**
     * Set min-height
     *
     * NOTE: Theme restrict.

     *
     * minH1 is `min-height: 4px`
     */
    minH1?: boolean

    /**
     * Set min-height
     *
     * NOTE: Theme restrict.

     *
     * minH2 is `min-height: 8px`
     */
    minH2?: boolean

    /**
     * Set min-height
     *
     * NOTE: Theme restrict.

     *
     * minH3 is `min-height: 12px`
     */
    minH3?: boolean

    /**
     * Set min-height
     *
     * NOTE: Theme restrict.

     *
     * minH4 is `min-height: 16px`
     */
    minH4?: boolean

    /**
     * Set min-height
     *
     * NOTE: Theme restrict.

     *
     * minH5 is `min-height: 20px`
     */
    minH5?: boolean

    /**
     * Set min-height
     *
     * NOTE: Theme restrict.

     *
     * minH6 is `min-height: 24px`
     */
    minH6?: boolean

    /**
     * Set min-height
     *
     * NOTE: Theme restrict.

     *
     * minH7 is `min-height: 28px`
     */
    minH7?: boolean

    /**
     * Set min-height
     *
     * NOTE: Theme restrict.

     *
     * minH8 is `min-height: 32px`
     */
    minH8?: boolean

    /**
     * Set min-height
     *
     * NOTE: Theme restrict.

     *
     * minH9 is `min-height: 36px`
     */
    minH9?: boolean

    minH10?: boolean
    minH11?: boolean
    minH12?: boolean
    minH13?: boolean
    minH14?: boolean
    minH15?: boolean
    minH16?: boolean
    minH17?: boolean
    minH18?: boolean
    minH19?: boolean
    minH20?: boolean

    /**
     * Set max-height
     *
     * @example
     * ```tsx
     * <View maxH-10></View>
     * <View maxH-1rem></View>
     * <View maxH-10p></View>
     * <View maxH={10}></View>
     * <View maxH="10px 4px"></View>
     * <View maxH={a + b}></View>
     * ```
     */
    maxH?: PropValue

    /**
     * Set max-height
     *
     * NOTE: Theme restrict.

     *
     * maxH0 is `max-height: 0px`
     */
    maxH0?: boolean

    /**
     * Set max-height
     *
     * NOTE: Theme restrict.

     *
     * maxH1 is `max-height: 4px`
     */
    maxH1?: boolean

    /**
     * Set max-height
     *
     * NOTE: Theme restrict.

     *
     * maxH2 is `max-height: 8px`
     */
    maxH2?: boolean

    /**
     * Set max-height
     *
     * NOTE: Theme restrict.

     *
     * maxH3 is `max-height: 12px`
     */
    maxH3?: boolean

    /**
     * Set max-height
     *
     * NOTE: Theme restrict.

     *
     * maxH4 is `max-height: 16px`
     */
    maxH4?: boolean

    /**
     * Set max-height
     *
     * NOTE: Theme restrict.

     *
     * maxH5 is `max-height: 20px`
     */
    maxH5?: boolean

    /**
     * Set max-height
     *
     * NOTE: Theme restrict.

     *
     * maxH6 is `max-height: 24px`
     */
    maxH6?: boolean

    /**
     * Set max-height
     *
     * NOTE: Theme restrict.

     *
     * maxH7 is `max-height: 28px`
     */
    maxH7?: boolean

    /**
     * Set max-height
     *
     * NOTE: Theme restrict.

     *
     * maxH8 is `max-height: 32px`
     */
    maxH8?: boolean

    /**
     * Set max-height
     *
     * NOTE: Theme restrict.

     *
     * maxH9 is `max-height: 36px`
     */
    maxH9?: boolean

    maxH10?: boolean
    maxH11?: boolean
    maxH12?: boolean
    maxH13?: boolean
    maxH14?: boolean
    maxH15?: boolean
    maxH16?: boolean
    maxH17?: boolean
    maxH18?: boolean
    maxH19?: boolean
    maxH20?: boolean
  }
}
