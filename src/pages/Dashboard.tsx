import SideMenu from "../components/SideMenu/SideMenu"
import ToDoList from "../components/ToDoList/ToDoList"

const Dashboard = () => {

  return (
    <div className="dashboard p-4 d-flex">
      <SideMenu />
      <ToDoList />
    </div>
  )
}

export default Dashboard