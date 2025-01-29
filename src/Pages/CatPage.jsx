import React from 'react'
import { useParams } from 'react-router'

function CatPage() {
    let urlData = useParams();
    
  return (
    <div>
      <h1>Category page</h1>
      <h5>{urlData.category}</h5>
    </div>
  )
}

export default CatPage
