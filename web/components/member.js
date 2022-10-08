import { PortableText } from '@portabletext/react'
import { urlFor } from '@lib/sanity'
import Image from 'next/image'

export default function Member({ props }) {

  const { name, slug, image, bio } = props

  return (
    <div className="space-y-4">
      <div className="aspect-1">
        <img
          src={urlFor(image).width(600).height(600).url()}
          alt={name}
          className="rounded-lg object-cover shadow-lg"
        />
      </div>
      <h3 className="text-lg font-medium text-slate-700 leading-6">{name}</h3>
      <p className="prose text-slate-500">
        <PortableText value={bio} />
      </p>
    </div>
  )
}