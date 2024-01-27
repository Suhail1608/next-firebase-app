import React from 'react'
import './styles.scss'
import Row from './Row'
const Col = ({children}:any) => {
  return (
    <Row><div className='col'>{children}</div></Row>
  )
}

export default Col