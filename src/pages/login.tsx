import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };

  return (
    <div>
      <p>Sign in with Google To continue</p>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default login;
