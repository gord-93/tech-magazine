function Card(props) {
  return (
    <div className="card">
      <img className="card__image" src="https://s8.uploads.ru/iuGkP.jpg" alt="" />
      <div className="card__container">
        <div className="card__top">
          <div className="card__like">
            <p className="card__like-score">999</p>
          </div>
          <p className="card__title">Venom Snakes and ffkfk</p>
        </div>
        <div className="card__second-container">
            <div className="card__texts">
              <div className="card__buttons">
                <button className="card__read-button" />
                <button className="card__like-button" />
              </div>
              <p className="card__subtitle">Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Architecto inventore 
              cupiditate ex dolorum hic iste amet, assumenda perspiciatis temporibus repudiandae, 
              libero vero quia voluptates aliquam sed ratione debitis totam maxime.</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Card;