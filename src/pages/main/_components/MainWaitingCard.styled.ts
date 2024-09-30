import styled from "styled-components";

interface MainWaitingCardWrapperProps {
  $backgroundColor: string;
}

export const MainWaitingCardWrapper = styled.div<MainWaitingCardWrapperProps>`
  display: flex;
  flex-direction: column;

  overflow: hidden;

  width: 100%;
  height: auto;

  border-radius: 0.75rem;

  background-color: ${({ $backgroundColor, theme }) =>
    theme.colors.scheme[$backgroundColor].background};
`;

export const MainWaitingCardContentWrapper = styled.section`
  margin-top: 1.25rem;
  padding: 1rem;
  padding-top: 1rem;

  background-color: white;
`;

export const MainWaitingCardHeader = styled.div`
  display: flex;

  gap: 0.5rem;
  align-items: center;

  padding: 0.25rem;
  padding-bottom: 0.75rem;

  > .waitingID {
    flex-shrink: 0;

    width: 3.25rem;

    text-align: center;

    ${({ theme }) => theme.fonts.h1}
  }
  > .waitingTime {
    flex-grow: 1;

    overflow: hidden;

    ${({ theme }) => theme.fonts.caption}
    color: ${({ theme }) => theme.colors.font.gray};

    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  }
`;

export const MainWaitingCardInfoBox = styled.div`
  display: flex;

  margin-bottom: 1.25rem;
  padding: 1rem 0rem;

  border-radius: 0.5rem;
  border: solid 1px;
  border-color: ${({ theme }) => theme.colors.border.grayLight};
`;

export const MainWaitingCardPartySizeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;

  width: 4rem;

  margin: 0rem 1.25rem;

  > label {
    ${({ theme }) => theme.fonts.caption}
    color: ${({ theme }) => theme.colors.font.gray};
  }

  > .partySize {
    ${({ theme }) => theme.fonts.h1}
    color: ${({ theme }) => theme.colors.font.blue};
  }
`;

export const MainWaitingCardUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  border-left: 1px solid;
  border-color: ${({ theme }) => theme.colors.border.gray};

  padding: 0rem 1.25rem;

  > .userName {
    ${({ theme }) => theme.fonts.h3}
    color: ${({ theme }) => theme.colors.font.black};
  }
`;
