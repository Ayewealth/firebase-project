import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import "../App.css";

const navbar = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user] = useAuthState(auth);

  const signUserOut = async () => {
    await signOut(auth);
  };

  return (
    <nav>
      <Link className="link" to="/">
        Home
      </Link>
      {!user ? (
        <Link className="link" to="/login">
          Login
        </Link>
      ) : (
        <Link className="link" to="/createpost">
          Create Post
        </Link>
      )}

      <div>
        {user && (
          <>
            <p>{auth.currentUser?.displayName}</p>
            <img
              src={user?.photoURL || ""}
              alt=""
              width={30}
              height={30}
              style={{ borderRadius: 50 }}
            />
            <button onClick={signUserOut}>Log out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default navbar;
