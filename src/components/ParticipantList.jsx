import React from "react";

function ParticipantList() {

  const participants = [
    "Teacher",
    "Student 1",
    "Student 2",
    "Student 3"
  ];

  return (
    <div className="participants">

      <h3>Participants</h3>

      <ul>

        {participants.map((user, index) => (
          <li key={index}>{user}</li>
        ))}

      </ul>

    </div>
  );
}

export default ParticipantList;