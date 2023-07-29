import { useDispatch, useSelector } from "react-redux"
import { selectUserName } from "../../redux/authorization/auth-selectors";
import { logOut } from "../../redux/authorization/auth-operations";
import { FormButton } from 'components/ContactForm/ContactForm.styled';
import { UserMenuBar, UserMenuText } from "./UserMenu.styled";
import defaultAvatar from "./img-user.jpg";

export default function UserMenu() {
    const dispatch = useDispatch();
    const avatar = defaultAvatar;
    const name = useSelector(selectUserName);
    const handleLogOut = () => dispatch(logOut());
    return (
        <UserMenuBar>
        <img src={avatar} width="30" alt={name} />
            <UserMenuText>Welcome, {name}</UserMenuText>
            <FormButton type="button" onClick ={handleLogOut}>Log Out</FormButton>
        </UserMenuBar>
    )
}