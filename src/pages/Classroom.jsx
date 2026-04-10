import VideoPanel from "../components/VideoPanel";
import ChatBox from "../components/ChatBox";
import ParticipantList from "../components/ParticipantList";

function Classroom() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <VideoPanel />
      <ChatBox />
      <ParticipantList />
    </div>
  );
}

export default Classroom;