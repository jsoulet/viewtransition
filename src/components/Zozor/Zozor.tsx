import React from 'react'
import zozor from './zozor.png'

interface Props {
  style?: React.CSSProperties,
  onClick?: () => void
}

const Zozor = (props: Props) => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={zozor.src} alt="Zozor" {...props} />
  )
}
export default Zozor