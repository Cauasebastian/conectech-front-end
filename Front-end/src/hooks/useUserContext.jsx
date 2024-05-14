import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function useUserContext(){
    const context = useContext(UserContext);
    return context
}