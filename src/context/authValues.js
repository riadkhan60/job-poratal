import { useContext } from "react";
import { context } from "./AuthenticationProvider";

function useAuth() {
  const values = useContext(context);
  if (!values) throw new Error("can not use outside of authenticated context");
  return values
}

export default useAuth