import { GoogleAuthProvider } from "firebase/auth";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const UseFirebase = () => {
  const {
    providerLogin,
    updateUserProfile,
    providerRegister,
    ProviderGoogleLogin,
    logOut,
    veryfyEmail,
    setLoading,
  } = useContext(AuthContext);

  const [error, setError] = useState("");
  const navigate = useNavigate();
  //=============================== Register ===============================
  const hendelRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const fullName = event.target.fullName.value;
    const photoURL = event.target.photoURL.value;
    providerRegister(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        event.target.reset();
        hendelUpdateProfile(fullName, photoURL);
        hendelVeryfiemail();
        setError("");
        Swal.fire(
          "Successfuly Register",
          "Pless Veryfi Your Email Adderess Before Login! Check Your Email Inbox If Not Found Then Check Spam Folder",
          "success"
        );
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

  const hendelUpdateProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {
        // Profile updated!
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
        setError(error.message);
      });
  };

  const hendelVeryfiemail = () => {
    veryfyEmail()
      .then(() => {
        // Email sent.
      })
      .catch((error) => {
        // An error ocurred
        const errorMessage = error.message;
        // ...
        setError(errorMessage);
      });
  };

  //=============================== Register ===============================

  //=============================== Sign In ===============================

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

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
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Veryfi Your Email Adderess!",
          });
        }
        setError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      })
      .finally(() => {
        setLoading(false);
      })
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
        setError("");
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = error.message;
        setError(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: errorMessage,
        });
      });
  };
  //=============================== Google Sign In ===============================

  //=============================== Sign Out ===============================
  const hendelLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        setError("");
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
