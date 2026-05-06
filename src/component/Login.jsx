import { useState } from "react";
import Header from "./Header"

//the explanation is below the export login okay!!!
{/*
    pehle state variable singin true he but jese he hum togglebtn pe click karenge kya hoga ki 
    to setcondtion me !state he matlab true hoga to btn dabane ke bad vo false hoga not condition ke vajh se 
    to baki niche ab sare condtion chk karenge ki true he ya false he aur us hisab se vo text show hoga ok!!
    
    
    */}

const Login = () => 
{
  // State variable: true = Sign In form, false = Sign Up form
  const [isSignInForm, setSignInForm] = useState(true);

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

        <form className="w-3/12 absolute p-12  my-36 mx-auto right-0 left-0 text-white rounded-lg bg-black opacity-75 ">
          <h1 className="font-bold text-3xl py-4">
            {/* Heading changes depending on state */}
            {isSignInForm ? "Sign In" : "sign Up"}
          </h1>

          {/* Show Name field only when Sign Up */}
          {!isSignInForm && (
            <input
              type="text"
              placeholder="plz Enter your Name "
              className="p-4 my-4 w-full bg-gray-700"
            />
          )}
          <input
            type="email"
            placeholder="plz Enter your EmailId "
            className="p-4 my-4 w-full bg-gray-700"
          />
          <input
            type="password"
            placeholder="Enter your password"
            className="p-4 my-4 w-full bg-gray-700"
          />
          <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
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