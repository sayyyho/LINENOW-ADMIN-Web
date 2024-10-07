import { createGlobalStyle } from "styled-components";

const LocalStyle = createGlobalStyle`
    // 초기 html 설정
    html {
        background-color: ${({ theme }) => theme.colors.background.blackLight};
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color:rgb(0 0 0 / 0%);
        scroll-behavior: smooth; 
        @media (max-width: 360px) {
		font-size:12px;
	}
    }

    .root {
        width: 100%;

        min-height: 100vh;
        overflow-x: hidden;
        background-color: ${({ theme }) => theme.colors.background.white};
        
        scrollbar-width: none; 
        -ms-overflow-style: none;

        ::-webkit-scrollbar {
            display: none;
        }
    }

    *::-webkit-scrollbar {
    display: none;
    }

    * {
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
    }
`;
export default LocalStyle;
