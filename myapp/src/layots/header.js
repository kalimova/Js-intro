import construct from "../construct"

const header = () => {
  return (
    <div className="header">
          <div className="header__wrapper">
            <a href="#" className="header__link">
              {construct.home}
            </a>
            <a href="#" className="header__link">
              {construct.about}
            </a>
            <a href="#" className="header__link">
              {construct.services}
            </a>
            <a href="#" className="header__link">
              {construct.work}
            </a>
            <a href="#" className="header__link">
              {construct.contact}
            </a>
          </div>
        </div>
  )
}

export default header