import { PortableText } from '@portabletext/react'
import { portableTextComponents } from '@components/portabletext-components'

export default function Section({ sections }) {
  return (
    <div className="flex flex-col space-y-6 lg:space-y-12 max-w-6xl mx-6 xl:mx-auto">
      {sections.map((section) => (
        <div key={section._key} id={section._key} className="flex flex-col space-y-6">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-mcnag-dark-blue">{section.sectionTitle}</h2>
          <div className="prose lg:prose-xl max-w-none">
            <PortableText value={section.content} components={portableTextComponents} />
          </div>
        </div>
      ))}
    </div>
  )
}