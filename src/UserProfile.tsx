import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>name</dt>
      <dd>{user.name}</dd>
      <dt>hoby</dt>
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};
