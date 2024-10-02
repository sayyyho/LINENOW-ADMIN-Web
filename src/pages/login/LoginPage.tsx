import { Button, InputPassword } from '@linenow/system';
import * as S from './LoginPage.styled';
import LogoImg from '../../../public/icons/logo.svg';
import { useState } from 'react';

const MAX_LENGTH = 20;

const LoginPage = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
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
          <Button width={'18.1875rem'}>로그인</Button>
        </S.LoginBoxWrapper>
      </S.LoginWrapper>
    </>
  );
};
export default LoginPage;
