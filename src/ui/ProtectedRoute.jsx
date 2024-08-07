/*eslint-disable*/
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
/*eslint-disable*/
const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1.Load the authenticatied UserActivation
  const { user, isLoading, isAuthenticated } = useUser();

  //2.If there is NO authenticated user, redirect to /login
  if (!isAuthenticated) navigate("/login");

  // useEffect(
  //   function () {
  //     if (isLoading && !isAuthenticated) {
  //       navigate("/login");
  //     }
  //   },
  //   [navigate, isAuthenticated, isLoading]
  // );

  //3.While loading,show a spiner
  // if (isLoading)
  //   return (
  //     <FullPage>
  //       <Spinner />
  //     </FullPage>
  //   );

  //4.If there is valid user,render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
