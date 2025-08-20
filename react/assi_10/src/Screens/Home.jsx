import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../Store/AuthSlice/AuthSlice";
import Loader from "../Components/Loader/Loader";
import UserDetails from "../Components/UserDetails/UserDetails";
import Navbar from "../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { authUsers, isLoading, isSuccess } = useSelector(
    (state) => state.userReducer
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {isSuccess && <Navbar text={"Profile"} handleProfileClick={handleProfileClick} />}
      <div className="container mx-auto px-4 py-8">
        {isLoading ? (
          <div className="h-screen w-full flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          authUsers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {authUsers.map((e) => (
                <UserDetails key={e.uid} name={e.name} email={e.email} uid={e.uid} />
              ))}
            </div>
          ) : (
            <p className="text-white text-center text-xl mt-10">No users found.</p>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
