import * as S from "./Sidebar.styled";

import { postLogout } from "@apis/domains/logout/apis";
import {
  Button,
  ButtonLayout,
  CommonButton,
  Icon,
  useModal,
} from "@linenow/system";
import { useLocation, useNavigate } from "react-router-dom";
import SidebarButton, { SidebarButtonProps } from "./SidebarButton";

const Sidebar = () => {
  const navigate = useNavigate();
  const { openModal, closeModal } = useModal();

  const handleLogout = async () => {
    const refreshToken = sessionStorage.getItem("refreshToken");

    if (refreshToken) {
      const result = await postLogout({ refresh_token: refreshToken });

      if (result) {
        sessionStorage.removeItem("accessToken");
        sessionStorage.removeItem("refreshToken");
        closeModal();
        navigate("/login");
      } else {
        // console.log('Logout failed');
      }
    } else {
      // console.log('No refreshToken found');
    }
  };

  const logoutModalProps = {
    title: "로그아웃 하시겠습니까?",
    sub: "언제든지 다시 로그인할 수 있습니다.",
    primaryButton: {
      children: "로그아웃",
      onClick: handleLogout,
    },
    secondButton: {
      children: "취소",
      onClick: closeModal,
    },
  };

  const handleLogoutClick = () => {
    openModal(logoutModalProps);
  };

  const location = useLocation();

  const navigateList: SidebarButtonProps[] = [
    {
      isSelected: location.pathname == "/",
      to: "/",
      label: "대기 팀 관리",
    },
    {
      isSelected: location.pathname == "/faq",
      to: "/faq",
      label: "문의하기",
    },
  ];

  const StopWaitingButton = () => {
    return (
      <Button scheme="blueLight">
        대기 중지하기 <Icon name={"pause_blue"} size={"1.5rem"} />
      </Button>
    );
  };

  const StartWaitingButton = () => {
    return (
      <Button scheme="blue">
        대기 재개하기 <Icon name={"play_white"} size={"1.5rem"} />
      </Button>
    );
  };

  const StopBoothButton = () => {
    return (
      <Button scheme="limeLight">
        운영 종료하기 <Icon name={"open_gary"} size={"1.5rem"} />
      </Button>
    );
  };

  const startBoothButton = () => {
    <Button scheme="lime">
      운영 시작하기 <Icon name={"open_gary"} size={"1.5rem"} />
    </Button>;
  };

  return (
    <S.SidebarWrapper>
      <S.SidebarUserInfoWapper>
        <h3>안녕하세요</h3>
        <h1>
          <span className="lime">라인나우</span> 님
        </h1>
        <CommonButton>
          <S.SidebarLogout onClick={handleLogoutClick}>
            로그아웃
          </S.SidebarLogout>
        </CommonButton>
      </S.SidebarUserInfoWapper>

      <S.SidebarButtonWrapper>
        {navigateList.map((item, index) => {
          return <SidebarButton {...item} key={index} />;
        })}
      </S.SidebarButtonWrapper>

      <ButtonLayout
        $col={1}
        $colGap="0.5rem"
        style={{ padding: `1.25rem 0.75rem 2rem 0.75rem` }}
      ></ButtonLayout>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
