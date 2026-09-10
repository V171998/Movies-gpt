
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { Logo } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {

    

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });

  }

  useEffect(() => {
     
    const unSubscribe = onAuthStateChanged(auth, (user) => {
       if (user) {
         // User is signed in,
         const { uid, email, displayName, photoURL } = user;
         dispatch(
           addUser({
             uid: uid,
             email: email,
             displayName: displayName,
             photoURL: photoURL,
           }),
         );
         navigate("/browse");
       } else {
         // User is signed out
         dispatch(removeUser());
         navigate("/");
       }
    });

    //unsubscribe when componenets ummount
    return () => unSubscribe();
    
   }, []);

  const handleGptSearchClick = () => {
    //Toggle GPT here
    dispatch(toggleGptSearchView());
        }
  
  return (
    <div className="absolute w-screen px-8 py-2 bg-linear-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={Logo} alt="netflix-logo" />

      {user && (
        <div className="flex p-2">
          <button className="py-2 px-4 mx-4 my-2 border border-white  rounded-lg" onClick={handleGptSearchClick}>
            GPT-SEARCH
          </button>
          <img className="h-12 w-12" alt="userIcon" src={user?.photoURL} />
          <button className="font-bold text-white " onClick={handleSignOut}>
            [sign Out]
          </button>
        </div>
      )}
    </div>
  );
}

export default Header