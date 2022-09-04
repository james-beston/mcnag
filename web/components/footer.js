export default function Footer() {
  return (
    <footer className="mt-12 relative bg-mcnag-dark-blue">
      <div className="flex justify-between items-center max-w-6xl mx-6 lg:mx-auto py-8 text-white">
        <p>&copy;{new Date().getFullYear()} Marine Conservation for Norfolk Action Group</p>
      </div>
    </footer>
  )
}