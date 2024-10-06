import * as S from './Sidebar.styled';

import { postLogout } from '@apis/domains/logout/apis';
import { useModal } from '@linenow/system';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const { openModal, closeModal } = useModal();

  const handleLogout = async () => {
    const refreshToken = sessionStorage.getItem('refreshToken');

    if (refreshToken) {
      const result = await postLogout({ refresh_token: refreshToken });

      if (result) {
        sessionStorage.removeItem('accessToken');
        sessionStorage.removeItem('refreshToken');
        closeModal();
        navigate('/login');
      } else {
        // console.log('Logout failed');
      }
    } else {
      // console.log('No refreshToken found');
    }
  };

  const logoutModalProps = {
    title: '로그아웃 하시겠습니까?',
    sub: '언제든지 다시 로그인할 수 있습니다.',
    primaryButton: {
      children: '로그아웃',
      onClick: handleLogout,
    },
    secondButton: {
      children: '취소',
      onClick: closeModal,
    },
  };

  const handleLogoutClick = () => {
    openModal(logoutModalProps);
  };

  return (
    <S.SidebarWrapper>
      sidebar
      <S.SidebarLogout onClick={handleLogoutClick}>로그아웃</S.SidebarLogout>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
