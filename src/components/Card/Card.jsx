function Card(props) {
  return (
    <div className="card">
      <img className="card__image" src="https://s8.uploads.ru/iuGkP.jpg" alt="" />
      <div className="card__texts">
        <p className="card__title">Venom Snakes</p>
        <p className="card__subtitle">How old Venom? Read about</p>
      </div>
      <button className="card__read-button" />
      <button className="card__like-button" />
      <p className="card__like-score">10</p>

    </div>
  )
}

export default Card;