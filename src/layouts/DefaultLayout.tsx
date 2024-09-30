// components
import * as S from "./DefaultLayout.styled";
import Navigation from "@components/navigation/Navigation";
import Sidebar from "@components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
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

export default DefaultLayout;
