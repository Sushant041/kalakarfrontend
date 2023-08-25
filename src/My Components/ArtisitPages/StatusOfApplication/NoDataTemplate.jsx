import "./noDataTemplate.css"
import ApplicationButton from "./ApplicationButton";

function NoDataTemplate({image , para}){
    return (
        <div className="noData_container">
        <img src={image} alt=""  />
        <p className="oops_text">Oops!</p>
        <p className="noData_para">
{para}
        </p>
        <ApplicationButton text={"View Events"} />
      </div>
    )
}

export default NoDataTemplate;