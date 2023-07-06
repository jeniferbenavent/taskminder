import SideMenu from "../components/SideMenu/SideMenu"
import ToDo from "../components/ToDo/ToDo"

const Dashboard = () => {

  return (
    <div className="dashboard p-4 d-flex">
      <SideMenu />
      <ToDo />
    </div>
  )
}

export default Dashboard