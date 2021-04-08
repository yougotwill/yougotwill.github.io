const Hero = () => {
  return (
    <section id='hero'>
      <div className="profile">
        <img src='/resources/images/avatar.jpg' alt="profile" className="image round" width='175px' height='175px' />
        <h1 className="heading">William Grant</h1>
      </div>
    <p className="quote"><i>"Without music, life would be a mistake." - Friedrich Nietzsche</i></p>

    <table className="info-grid">
      <tbody>
        <tr>
          <td className="subtitle left">South African <span className="icon" role='img' aria-label='south africa'>🇿🇦</span></td>
          <td className="subtitle right">Web Developer <span className="icon" role='img' aria-label='programmer'>👨‍💻</span></td>
        </tr>
        <tr>
          <td className="subtitle left">Music Lover <span className="icon" role='img' aria-label='headphones'>🎧</span></td>
          <td className="subtitle right">Ramen Enthusiast <span className="icon" role='img' aria-label='ramen bowl'>🍜</span></td>
        </tr>
      </tbody>
    </table>
  </section>
  );
};

export default Hero;
