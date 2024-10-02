import { Button, InputPassword } from '@linenow/system';
import * as S from './LoginPage.styled';
import LogoImg from '../../../public/icons/logo.svg';
import { useState } from 'react';
import { postLogin } from '@apis/domains/login/apis';
import { useNavigate } from 'react-router-dom';

const MAX_LENGTH = 20;

const LoginPage = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const accessToken = await postLogin({ id: inputValue });

      if (accessToken) {
        localStorage.setItem('accessToken', accessToken);
        navigate('/');
      } else {
        alert('등록되지 않은 고유번호입니다.');
      }
    } catch (error) {
      alert('등록되지 않은 고유번호입니다.');
    }
  };

  return (
    <>
      <S.LoginWrapper>
        <S.LoginLogo src={LogoImg} />
        <S.LoginBoxWrapper>
          <S.LoginBoxContent>
            <S.LoginBoxTitle>관리자 로그인</S.LoginBoxTitle>
            <S.LoginBoxInputWrapper>
              <S.LoginBoxSubTitle>고유번호</S.LoginBoxSubTitle>
              <InputPassword
                value={inputValue}
                onChange={handleChange}
                maxLength={MAX_LENGTH}
              />
              <S.LoginBoxInputCount>
                {inputValue.length}/{MAX_LENGTH}
              </S.LoginBoxInputCount>
            </S.LoginBoxInputWrapper>
          </S.LoginBoxContent>
          <Button width={'20.6875rem'} onClick={handleLogin}>
            로그인
          </Button>
        </S.LoginBoxWrapper>
      </S.LoginWrapper>
    </>
  );
};
export default LoginPage;
