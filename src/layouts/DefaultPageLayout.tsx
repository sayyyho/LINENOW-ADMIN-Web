// components
import * as S from "./DefaultPage.styled";
import Navigation from "@components/navigation/Navigation";
import Sidebar from "@components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const DefaultPageLayout = () => {
  return (
    <S.DefaultLayoutGrid>
      <Navigation />
      <Sidebar />
      <S.DefaultLayoutOutletWrapper>
        <Outlet />
      </S.DefaultLayoutOutletWrapper>
    </S.DefaultLayoutGrid>
  );
};

export default DefaultPageLayout;
