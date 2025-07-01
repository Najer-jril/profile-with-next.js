export default function PortofolioPage() {
  return (
    <><section className="py-20 bg-darkbg" id="projects">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl text-light1 font-bold mb-6">Projects</h3>
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
    <footer className="py-6 bg-footerbg text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Nazril. All rights reserved.
      </footer></>
  );
}
