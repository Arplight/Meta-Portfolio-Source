import profilePic from "../../../assets/Profile-Picture/profile-pic.jpeg";
export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="profile-pic">
          <img src={profilePic} alt="profile picture" />
        </div>
        <p className="welcome-msg">Hello, I am Muhammad!</p>
        <h1>A Front-end Developer Specialised In React</h1>
      </div>
    </header>
  );
}
