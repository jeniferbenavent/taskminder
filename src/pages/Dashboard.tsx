import SideMenu from "../components/SideMenu/SideMenu"
import ToDoList from "../components/ToDoList/ToDoList"

const Dashboard = () => {

  return (
    <div className="container-fluid">
      <SideMenu />
      <ToDoList />
    </div>
  )
}

export default Dashboard