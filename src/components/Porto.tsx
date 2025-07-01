export default function Porto() {
    return (
    <section className="py-20 bg-darkbg" id="projects">
      <div className="container mx-auto px-4">
        <h3 className="text-4xl text-light1 text-center font-bold mb-6">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white shadow rounded-xl">
            <h4 className="text-xl text-base font-semibold">Project Name</h4>
            <p className="text-base ">Short description of the project and what technologies were used.</p>
          </div>

          <div className="p-6 bg-white shadow rounded-xl">
            <h4 className="text-xl text-base font-semibold">Project Name</h4>
            <p className="text-base ">Another project with brief explanation and tech stack.</p>
          </div>
        </div>
      </div>
    </section>
    )
}
