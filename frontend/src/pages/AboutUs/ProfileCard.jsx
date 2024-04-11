import React from "react";
import userImg from "../../img/user.jpg";
import "./ProfileCard.css";

export const ProfileCard = () => {
  const team = [
    { name: "Akhat Abdrakhmanov", role: "Project Manager" },
    { name: "Nurdaulet Bagdauleltov", role: "Front-end Developer" },
    { name: "Alisher Baktygaliyev", role: "Back-end Developer" },
  ];

  return (
    <>
      {team.map((user, i) => {
        return (
          <div className="card" key={i}>
            <img src={userImg} alt="developer" />

            <div className="info">
              <h2>{user.name}</h2>
              <h3>{user.role}</h3>
              <button>Contact</button>
            </div>
          </div>
        );
      })}
    </>
  );
};
