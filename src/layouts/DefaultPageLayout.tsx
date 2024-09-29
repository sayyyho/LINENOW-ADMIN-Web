// components
import * as S from "./DefaultPage.styled";
import Navigation from "@components/navigation/Navigation";
import Sidebar from "@components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const DefaultPageLayout = () => {
  return (
    <>
      <Navigation />
      <S.DefaultPageOutletWrapper>
        <Sidebar />
        <Outlet />
      </S.DefaultPageOutletWrapper>
    </>
  );
};

export default DefaultPageLayout;
