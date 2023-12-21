import React from 'react'

interface Props {
    id: string
    title: string
    image: string
    downloadNumber: number
    slug: string
}

const ResourceCard = ({ id, title, image, downloadNumber, slug }: Props) => {
  return (
    <div>ResourceCard</div>
  )
}

export default ResourceCard