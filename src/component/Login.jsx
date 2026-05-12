import { useRef, useState } from "react";
import Header from "./Header"
import { checkValidData } from "../utils/Validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";



//the explanation is below the export login okay!!!
{/*
    pehle state variable signin true he but jese he hum togglebtn pe click karenge kya hoga ki 
    to setcondtion me !state he matlab true hoga to btn dabane ke bad vo false hoga not condition ke vajh se 
    to baki niche ab sare condtion chk karenge ki true he ya false he aur us hisab se vo text show hoga ok!!
    
    
    */}

const Login = () => 
{
  // State variable: true = Sign In form, false = Sign Up form
    const [isSignInForm, setSignInForm] = useState(true);
  
    const [ErrMessage, setErrMessage] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    {/*
        we have use this userRef() hook which is use to ref to the input box and then it will give 
        us an object of the input box which will contain the value that we are going to write int that input box.
        to ref input box we create a useRef() hook first and then in the input box we write ref={whatever thing we are trying to ref}
        
        when we click on the handleBtnClick()(sign in) we want to fetch the value 
        and check if they are valid or not(basically we are performing validation)
        and to fetch the value we have use useRef() hook
        */}
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    
    const handleBtnClick = () => { 

        //console.log(name.current.value)
       // console.log(email.current.value);
       // console.log(password.current.value);

        const message = checkValidData(
         email.current.value,
         password.current.value
        );
        
        setErrMessage(message);
        // console.log(message);

        if (message) return;

        if (!isSignInForm) {
            //sign up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredential) => {
                // Signed up
                  const user = userCredential.user;
                  console.log(user);

                  updateProfile(user, {
                    displayName: "name.current.value",
                    photoURL:
                      "https://lh3.googleusercontent.com/a/ACg8ocKQUFrEKCcRwazmAgfhLxBhpQkVDu-qakhVKVscLBc55ohzIRK-=s360-c-no",
                  })
                    .then(() => {
                        // Profile updated!
                         const { uid, email, displayName , photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                        
                        navigate("/browse");
                    })
                    .catch((error) => {
                      // An error occurred
                        setErrMessage(error.message);
                    });
                  
              })
              .catch((error) => {
                const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrMessage(errorCode + "-" + errorMessage);
                // ..
              });

        } else {
            
            //sign in logic

            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredential) => {
                // Signed in
                  const user = userCredential.user;
                  console.log(user);
                  navigate("/browse");
                // ...
              })
              .catch((error) => {
                const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrMessage(errorCode + "-" + errorMessage);
              });

        }



    };
    
  /* 
    Toggle function:
    Flips between Sign In and Sign Up.
    This single switch controls all conditional rendering below.
  */
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <>
      <div>
        <Header />

        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/5efeb1fd-55d2-4799-8d38-e59e15858b9c/web/IN-en-20260427-TRIFECTA-perspective_0933b420-0cb6-4e67-8e9d-3224dc64b517_medium.jpg"
            alt="background-logo"
          />
        </div>

        <form onSubmit={(e)=> {e.preventDefault()}} className="w-3/12 absolute p-12  my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black opacity-75 ">
          <h1 className="font-bold text-3xl py-4">
            {/* Heading changes depending on state */}
            {isSignInForm ? "Sign In" : "sign Up"}
          </h1>

          {/* Show Name field only when Sign Up */}
          {!isSignInForm && (
                      <input
                           ref={name}
              type="text"
              placeholder="plz Enter your Name "
              className="p-4 my-4 w-full bg-gray-700"
            />
          )}
                  <input
                      ref={email}
            type="email"
            placeholder="plz Enter your EmailId "
            className="p-4 my-4 w-full bg-gray-700"
          />
                  <input
                      ref={password}
            type="password"
            placeholder="Enter your password"
            className="p-4 my-4 w-full bg-gray-700"
                  />
                  <p className="text-red-800 font-bold text-lg py-2">{ErrMessage}</p>
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleBtnClick}>
            {/* Heading changes depending on state */}
            {isSignInForm ? "Sign In" : "sign Up"}
          </button>
          <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to MoviesGpT? sign Up Now"
              : "Already registered? Sing In Now"}
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;



// How to remember without memorizing
// Instead of rote memorization, focus on conceptual anchors:

// State drives UI → isSignInForm decides what to show.

// Toggle flips state → setSignInForm(!isSignInForm) is just “switch to the opposite”.

// Conditional rendering → !isSignInForm && <input ... /> means “show this only if Sign Up”.

// Dynamic text → {isSignInForm ? "Sign In" : "Sign Up"} is a ternary operator that swaps text based on state.

// Think of it like this:

// One switch (state) controls everything.

// One button (toggle) flips the switch.

// UI pieces appear/disappear depending on the switch.

// Memory trick

// Instead of memorizing code, remember the story:

// “I have a login form. It starts as Sign In. If I click the link, it flips to Sign Up. The form changes slightly (adds a Name field) and the button text changes too.”

// That story is enough to reconstruct the code later, because React patterns are consistent:

// useState for state.

// setState(!state) for toggling.

// {condition ? A : B} for swapping text.

// {condition && <Something />} for showing optional fields


// here’s a minimal version of your Sign In / Sign Up toggle component, stripped down to the essentials so you can see the core idea clearly:

// import { useState } from "react";

// const Login = () => {
//   const [isSignIn, setIsSignIn] = useState(true);

//   const toggleForm = () => setIsSignIn(!isSignIn);

//   return (
//     <div>
//       <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>

//       {!isSignIn && <input type="text" placeholder="Name" />}
//       <input type="email" placeholder="Email" />
//       <input type="password" placeholder="Password" />

//       <button>{isSignIn ? "Sign In" : "Sign Up"}</button>

//       <p onClick={toggleForm}>
//         {isSignIn ? "New user? Sign Up" : "Already registered? Sign In"}
//       </p>
//     </div>
//   );
// };

// export default Login;


// 🔹 What’s happening here
// State (isSignIn) → decides which form you see.

// Toggle (setIsSignIn(!isSignIn)) → flips between Sign In and Sign Up.

// Conditional rendering:

// !isSignIn && <input ... /> → show the Name field only for Sign Up.

// {isSignIn ? "Sign In" : "Sign Up"} → swap text depending on state.

// 🔹 How to remember it
// Think of it like a light switch:

// isSignIn = switch ON → Sign In form.

// !isSignIn = switch OFF → Sign Up form.

// The toggle flips the switch.

// The UI changes based on the switch’s position.