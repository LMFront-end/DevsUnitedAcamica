import { HeaderProfile } from "../components/HeaderProfile";
import { ProfileCard } from "../components/ProfileCard";
import "./styles/Profile.scss";
const Profile = () => {
  return (
    <section className="Profile">
      <HeaderProfile />
      <ProfileCard />
    </section>
  );
};

export { Profile };
