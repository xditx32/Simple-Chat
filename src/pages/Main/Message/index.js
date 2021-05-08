import { useRecoilState } from "recoil";
import { selectedUserState } from "../../../recoil";

const Message = () => {
  const [selectedUser] = useRecoilState(selectedUserState);
  console.log("selectedUser", selectedUser);
  return <div></div>;
};
export default Message;
