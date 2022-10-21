import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UseFirebase = () => {
  const { providerLogin, providerRegister, ProviderGoogleLogin, logOut } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  //=============================== Register ===============================
  const hendelRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const fullName = event.target.fullName.value;
    providerRegister(email, password, fullName)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire("Successfuly Register", "You clicked the button!", "success");
        event.target.reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      });
  };

  //=============================== Register ===============================

  //=============================== Sign In ===============================

  const hendelLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    providerLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire("Successfuly Login", "You clicked the button!", "success");
        event.target.reset();
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      });
  };

  //=============================== Sign In ===============================

  //=============================== Google Sign In ===============================
  const googleProvider = new GoogleAuthProvider();

  const hendelSignInWithGoogle = () => {
    ProviderGoogleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire("Successfuly Logedin!", "You clicked the button!", "success");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //=============================== Google Sign In ===============================

  //=============================== Sign Out ===============================
  const hendelLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        Swal.fire(
          "Successfuly Loge Out!",
          "You clicked the button!",
          "success"
        );
      })
      .catch((error) => {
        // An error happened.
        setError(error.message);
        console.log(error);
      });
  };
  //=============================== Sign Out ===============================

  return {
    hendelLogout,
    hendelSignInWithGoogle,
    hendelLogin,
    error,
    hendelRegister,
  };
};

export default UseFirebase;
