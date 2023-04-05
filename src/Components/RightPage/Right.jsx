import React,{useState, useEffect} from 'react'





const Right = () => {

    const [tasks, setTasks] = useState([]);

useEffect(() => {
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => setTasks(data));
}, []);
    return (
        <div>
            <div className="right">
                <div className="heading">
                    <h5 className="head">
                        Technical Project Management
                    </h5>
                    <button className="submit">
                        Subimt Task
                    </button>
                </div>
                <ul>
                    {
                        tasks.map((task) => (
                            <li key={task.task_id}>
                                <div className="task">
                                    <div className="task-group">
                                        <div className="task-detail">
                                            <h5 className="task_title">
                                                {task.task_title}
                                            </h5>
                                            <span className="task_description">
                                                {task.task_description}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="asset-container">
                                    <ul>
                                        {
                                            task.assets.map((asset) => (
                                                <li key={asset.asset_id}>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="card">
                                                                <div className="card_body">
                                                                    <h5 className="card_title">{asset.asset_title}</h5>
                                                                    <p className="card-text">Description: {asset.asset_description}</p>
                                                                    <p className="card-text">   {
                                                                        asset.asset_type === "display_asset"
                                                                        && (
                                                                            <iframe src={asset.asset_content}
                                                                                title={asset.asset_title}
                                                                                className="card-content"></iframe>
                                                                        )
                                                                    }
                                                                        {
                                                                            asset.asset_type !== "input_asset"
                                                                            && (
                                                                                <p>
                                                                                    {asset.asset_content_type}
                                                                                    :
                                                                                    {!asset.asset_description}</p>
                                                                            )
                                                                        }</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>

                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Right