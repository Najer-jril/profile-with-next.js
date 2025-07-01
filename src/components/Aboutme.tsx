export default function Aboutme() {
  return (
    <>
      <section className="py-20 bg-darkbg" id="hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-light1">Hi, I`m Nazril 👋</h2>
          <p className="text-lg text-light2">I build clean, modern, and efficient web applications.</p>
        </div>
      </section>
      <section className="py-20 bg-darkbg" id="about" >
        <div className="container mx-auto px-4">
          <h3 className="text-2xl text-light1 font-bold mb-6">About Me</h3>
          <p className="text-light2 leading-relaxed">
            im a passionate fullstack developer focused on crafting clean and <br />
            user-friendly experiences. I`m always interested in learning new <br />
            technologies and improving my craft.
          </p>
        </div>
      </section>
    </>
  );
}
