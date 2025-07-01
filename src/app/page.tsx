// import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 font-sans">
      <header className="p-6 bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Nazril.Ilham</h1>
          <nav className="space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <section className="py-20 bg-gray-50" id="hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Hi, I`m Nazril 👋</h2>
          <p className="text-lg text-gray-600">I build clean, modern, and efficient web applications.</p>
        </div>
      </section>

      <section className="py-20" id="about">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">About Me</h3>
          <p className="text-gray-700 leading-relaxed">
            im a passionate fullstack developer focused on crafting clean and user-friendly experiences. I`m always interested in learning new technologies and improving my craft.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50" id="projects">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white shadow rounded-xl">
              <h4 className="text-xl font-semibold">Project Name</h4>
              <p className="text-gray-600">Short description of the project and what technologies were used.</p>
            </div>
            <div className="p-6 bg-white shadow rounded-xl">
              <h4 className="text-xl font-semibold">Project Name</h4>
              <p className="text-gray-600">Another project with brief explanation and tech stack.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" id="contact">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-bold mb-6">Contact</h3>
          <p className="text-gray-700">Want to work together or just say hi? Reach me via email at <a href="mailto:nazril@example.com" className="underline">nazril@example.com</a></p>
        </div>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Nazril. All rights reserved.
      </footer>
    </main>
  );
}
