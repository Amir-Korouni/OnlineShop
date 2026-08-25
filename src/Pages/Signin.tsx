const Signin = () => {
  return (
    <>
      <section className="w-full h-[100vh] bg-[#07070A] text-[#F5F5F5] flex justify-center items-center">
        <section className="w-[50%] h-full flex justify-center items-center">
          <div className="w-full h-full flex justify-center items-center">
            <form
              action=""
              className="w-[80%] h-[80%] bg-zinc-900 border border-purple-900 rounded"
            >
              <div>
                <h2>Login</h2>
              </div>
              <div>
                <label htmlFor="Email">Email</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="password">password</label>
                <input type="text" />
              </div>
              <div>
                <button type="submit" className="w-[150px] h-[2rem] bg-purple-800 border border-zinc-100 rounded">Sign In</button>
              </div>
            </form>
          </div>
        </section>
        <section className="w-[50%] h-full flex justify-center items-center">
          <img
            src="https://images.openai.com/static-rsc-4/0zoDAu4hSxmbpb4BYhd2hd3Ij281Ptp4pQnwaFIjqTo25TLNE41qZh3u1eWfy3gXo0n7m_djvcUDA7xFG3qf6N8amL-hXwJ1DqI-fRkJhWGDJxofxFRH2fv11ivc8AIKi6sUPWKLbBup2u5EZtGocnI6gFFZrgQt6Ufas2O6fZzKumUOrsqVYg6Cn84YEyt7?purpose=fullsize"
            alt="Headphone Icone"
            className="w-[100%] h-full object-cover"
          />
        </section>
      </section>
    </>
  );
};

export default Signin;
