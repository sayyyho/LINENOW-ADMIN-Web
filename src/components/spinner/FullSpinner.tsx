import useIsLoading from "@hooks/useIsLoading";
import Spinner from "./Spinner";
import * as S from "./Spinner.styled";

const FullSpinner = () => {
  const { loadings } = useIsLoading();
  return loadings.isFullLoading ? (
    <S.SpinnerBackground>
      <Spinner />
    </S.SpinnerBackground>
  ) : null;
};

export default FullSpinner;
