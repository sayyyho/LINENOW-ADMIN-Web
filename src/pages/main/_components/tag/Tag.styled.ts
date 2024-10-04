import styled from "styled-components";

export const TagWrapper = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  align-items: center;

  padding: 0.5rem 0.75rem;

  border-radius: 1.375rem;

  background-color: ${({ theme }) => theme.colors.background.black};

  color: ${({ theme }) => theme.colors.font.gray};
  cursor: pointer;

  ${({ $isSelected }) =>
    $isSelected &&
    `
    border: 1px solid white; 
    color:white;
  `}
`;

export const TagImage = styled.img`
  width: 1.25rem;
  height: 1.25rem;
`;

export const TagListWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1.25rem 2rem 1.5rem 2rem;
  gap: 0.75rem;
`;
