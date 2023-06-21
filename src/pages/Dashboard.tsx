import EditMenu from "../components/EditMenu/EditMenu"
import SideMenu from "../components/SideMenu/SideMenu"
import TodoList from "../components/TodoList/TodoList"

const Dashboard = () => {

  return (
    <div className="container-fluid dashboard">
      <div className="row">
        <div className="col">
          <SideMenu />
        </div>
        <div className="col">
          <TodoList />
        </div>
        <div className="col">
          <EditMenu />
        </div>
      </div>
    </div>
  )
}

export default Dashboard