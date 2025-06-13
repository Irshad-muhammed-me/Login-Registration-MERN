function Home() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://codetheweb.blog/assets/img/posts/css-advanced-background-images/cover.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <h1 className=" danger">WELCOME TO HOME PAGE!</h1>
      <p className="text-white">
        Discover innovative solutions, smart services, and creative ideas
        tailored just for you. Step into a space where technology meets
        imagination!
      </p>

      <p className="text-white">
        We are passionate about building digital experiences that make a
        difference. Let,s create something amazing together.
      </p>
    </div>
  );
}

export default Home;
