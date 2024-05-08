
const Sidebar = () => {
  return (
    <nav id="sidebar">
      <h1 id="nav-title" className="heading nav-heading">
        Navigation
      </h1>
      <ul className='nav-list list'>
        <li id="nav-home" className="nav-item item">
          <a href="./" className="nav-link link">
            <p className="nav-text text">
              Home
            </p>
          </a>
        </li>
        <li id="nav-blog" className="nav-item item">
          <a href="./" className="nav-link link">
            <p className="nav-text text">
              Blog Feed
            </p>
          </a>
        </li>

      </ul>
    </nav>
  )
}

export default Sidebar;