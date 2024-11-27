import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

import {
  ProfileBio,
  ProfileContainer,
  ProfileFooter,
  ProfileInfo,
} from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";

interface UserProps {
  avatar_url: string | undefined;
  name: string;
  bio: string | null;
  login: string;
  company: string | null;
  followers: string | null;
  html_url: string;
}

export function Profile() {
  const [user, setUser] = useState<UserProps | null>(null);

  const fetchUsers = async () => {
    const { data } = await api.get("users/higorrocha10");

    const { name, avatar_url, bio, login, company, followers, html_url } = data;

    // const newUser: UserProps = {
    //   name: data.name,
    //   avatar_url: data.avatar_url,
    //   bio: data.bio,
    //   login: data.login,
    //   company: data.company,
    //   followers: data.followers,
    //   html_url: data.html_url,
    // };

    const newUser: UserProps = {
      name,
      avatar_url,
      bio,
      login,
      company,
      followers,
      html_url,
    };

    setUser(newUser);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ProfileContainer>
      <img src={user?.avatar_url} alt="" />

      <div>
        <ProfileInfo>
          <h1>{user?.name}</h1>
          <a href={user?.html_url}>
            GitHub
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </ProfileInfo>

        <ProfileBio>{user?.bio}</ProfileBio>

        <ProfileFooter>
          <span>
            <FontAwesomeIcon icon={faGithub} />
            {user?.login}
          </span>

          <span>
            <FontAwesomeIcon icon={faBuilding} />
            {user?.company}
          </span>

          <span>
            <FontAwesomeIcon icon={faUserGroup} />
            {user?.followers}
          </span>
        </ProfileFooter>
      </div>
    </ProfileContainer>
  );
}
