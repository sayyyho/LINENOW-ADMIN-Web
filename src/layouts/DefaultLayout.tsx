// components
import * as S from "./DefaultLayout.styled";
import Navigation from "@components/navigation/Navigation";
import Sidebar from "@components/sidebar/Sidebar";
import useView from "@hooks/useView";
import { Modal } from "@linenow/system";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  const { isMobile } = useView();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <S.DefaultLayoutGrid className={isMobile ? "mobile" : "tablet"}>
      <Modal />
      <Navigation isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar isMobile={isMobile} isOpen={isOpen} setIsOpen={setIsOpen} />
      <S.DefaultLayoutOutletWrapper>
        <Outlet />
      </S.DefaultLayoutOutletWrapper>
    </S.DefaultLayoutGrid>
  );
};

export default DefaultLayout;
