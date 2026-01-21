function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-6 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Visas Vision. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
