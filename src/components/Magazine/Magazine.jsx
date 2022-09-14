import magImg from '../../images/mag-01.png';

function Magazine(props) {
  return (
    <section className="magazine">
      <div className="magazine__container">
        <div className="magazine__top-long-area">
          <p className='magazine__time'>Sep 2022</p>
          <h1 className="magazine__title">Game-Magazine</h1>
        </div>
        <div className="magazine__bottom-container">
          <div className="magazine__left-short-area">
            <div className="magazine__links">
              <p className="magazine__link">This is Link</p>
              <p className="magazine__link-text">Link</p>
              <p className="magazine__link-text">20 actions</p>
            </div>
            <div className="magazine__links magazine__links_margin">
              <p className="magazine__link">This is Array</p>
              <p className="magazine__link-text">Arrai of the Year</p>
              <p className="magazine__link-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sint quisquam quibusdam minima suscipit officia odit dicta veritatis labore dolorem quo, illum accusantium reprehenderit quasi quidem saepe itaque at nemo!</p>
            </div>
          </div>
          <div className="magazine__right-short-area">
          <div className="magazine__links magazine__links_place_right">
              <p className="magazine__link magazine__link_size_big">About summer</p>
              <p className="magazine__link-text">Link</p>
              <p className="magazine__link-text magazine__link-text_colored_pink">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quasi, nemo animi doloribus incidunt quibusdam ducimus omnis ullam quis odio voluptatem libero quae, consequuntur officiis id soluta possimus vitae labore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet tempore, dolorem perferendis quia ex ratione doloremque sunt facilis autem, ipsam cum neque excepturi dolor quidem cupiditate esse perspiciatis, blanditiis nostrum.</p>
            </div>
          </div>
        </div>
        <img src={magImg} alt="" className="magazine__image" />
      </div>
    </section>
  )
}

export default Magazine;