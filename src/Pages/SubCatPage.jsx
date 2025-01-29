import React from 'react'
import { useParams } from 'react-router'

function SubCatPage() {
    let urlData = useParams();
  return (
    <div>
      <h1>{urlData.subcat}</h1>
    </div>
  )
}

export default SubCatPage