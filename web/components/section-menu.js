export default function SectionMenu({ sections }) {
  return (
    <ul className="sticky top-12 p-6 space-y-6 text-slate-500 text-sm font-medium">
      {sections.map((section) => (
        <li key={section._key}><a href={`#${section._key}`} className="hover:text-mcnag-dark-blue">{section.sectionTitle}</a></li>
      ))}
    </ul>
  )
}