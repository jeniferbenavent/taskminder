import { Form } from 'react-bootstrap'
import './SideMenu.css'

const SideMenu = () => {

  return (
    <aside className="sideMenu">
      <div className='sideMenu-title'>
        <h4>Menu</h4>
        <img src="/assets/icons/menu.png" width={17} height={17}></img>
      </div>
      <div className='sideMenu-searchbar'>
        <Form.Control
          id="searchbar"
          type="text"
          placeholder="Search"
          className="searchbar"
        />
      </div>
    </aside>
  )

}

export default SideMenu