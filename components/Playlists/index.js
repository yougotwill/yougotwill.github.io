const Playlists = () => {
  return (
    <div className='playlists'>
      <iframe src='https://open.spotify.com/embed/playlist/57IqIwwb4roJMJ9UEsEXRo' frameborder='0' allowtransparency='true' allow='encrypted-media' className='card zero'></iframe>
      <iframe src='https://open.spotify.com/embed/playlist/09Vnzg0luvQfRTuuLt9DQI' frameborder='0' allowtransparency='true' allow='encrypted-media' className='card one'></iframe>
      <iframe src='https://open.spotify.com/embed/playlist/6wSP8nuYAmSqvmIgoSv3oI' width='300' height='380' frameborder='0' allowtransparency='true' allow='encrypted-media' className='card two'></iframe>
      <iframe src='https://open.spotify.com/embed/playlist/3EYHbdmiSSYGJeH5wpFOvQ' frameborder='0' allowtransparency='true' allow='encrypted-media' className='card three'></iframe>
    </div>
  );
};

export default Playlists;
