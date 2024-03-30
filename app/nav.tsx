
const Sidebar = () => {
  return (
    <nav id="sidebar">
      <h1 id="nav-title" className="heading nav-heading">
        Navigation
      </h1>
      <ul className='nav-list list'>
        <li id="nav-home" className="nav-item list-item">
          <a href="./" className="nav-link link">
            <p className="nav-text text">
              Home
            </p>
          </a>
        </li>
        <li id="nav-news" className="nav-item list-item">
          <a href="./" className="nav-link link">
            <p className="nav-text text">
              News Feed
            </p>
          </a>
        </li>
        <li id="nav-profile" className="nav-item list-item">
          <a href="./" className="nav-link link">
            <p className=" nav-text text">
              Profile
            </p>
          </a>
        </li>
        <li id="nav-contacts" className="nav-item list-item">
          <a href="./contacts" className="nav-link link">
            <p className="nav-text text">
              Contacts
            </p>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar;