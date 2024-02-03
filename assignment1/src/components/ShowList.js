import React from 'react'

const ShowList = ({items}) => {
  return (<>
  {
    items.map((item, index) => {
      return <li key={index}>{item}</li>
    })
  }
    
  </>
  )
}

export default ShowList
