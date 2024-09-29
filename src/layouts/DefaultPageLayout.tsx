// components
import * as S from "./DefaultPage.styled";
import Navigation from "@components/navigation/Navigation";
import Sidebar from "@components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const DefaultPageLayout = () => {
  return (
    <div>
      <Navigation />
      <S.DefaultPageOutletWrapper>
        <Sidebar />
        <Outlet />
      </S.DefaultPageOutletWrapper>
    </div>
  );
};

export default DefaultPageLayout;
