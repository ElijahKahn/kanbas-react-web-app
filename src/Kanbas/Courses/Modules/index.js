import ModuleList from "./ModuleList";
import { FaEllipsisV } from "react-icons/fa";

function Modules() {
  return (
    <div className="col-11">
            <div className="row" id="home-btns">
              <div className="col">
                <button className="btn btn-light">Collapse All</button>
                <button className="btn btn-light">View Progress</button>
                <select id="select-one-publish" className="form-select">
                  <option value="PUBLISH ALL">Publish All</option>
                </select>
                <button className="btn btn-danger">Module</button>
                <button className="btn btn-light">
                  <FaEllipsisV />
                </button>
                <hr />
              </div>
            </div>

            <div className="col">
              <ModuleList />
            </div>
          </div>
  );
}
export default Modules;
