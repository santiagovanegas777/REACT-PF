import React from "react";
// import '../../styles/ListFrutas.css'
import '../../styles/Actividades/ListActividades.css';
import { Link } from "react-router-dom";

const renderActivities = (activities) => {
  return activities.map((activity, i) => (
    <article className="article_activity">
      <Link to={`./${activity._id}`} style={{ textDecoration: "none" }} key={i}>
        <li key={activity.id} className="actividad">
          <div className="actividad-imageContainer">
            <img
              src={activity.activityImg}
              alt={activity.activityName}
              className="actividad-image"
            />
          </div>
          <div className="actividad-info">
            <h2 className="actividad-name">
              {activity.activityName} ({activity.activityDescription})
            </h2>
            <p className="actividad_place">Place:{activity.activityPlace}</p>
            <p className="actividad_date">Date:{activity.activityDate}</p>
            <p className="actividad_time">Place:{activity.activityTime}</p>
            <p className="actividad_precio">Precio:{activity.activityPrice}€</p>
          </div>
        </li>
      </Link>
    </article>
  ));
};
const ListActividades = ({ activities }) => {
  return <section>{renderActivities(activities)}</section>;
};
export default ListActividades;
