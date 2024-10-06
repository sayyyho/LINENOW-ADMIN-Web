import { BoothInfoAtom } from "@atoms/boothInfo";
import { Booth } from "@interfaces/booth";
import { useAtom } from "jotai";

const useBoothInfo = () => {
  const [boothInfo, setBoothInfo] = useAtom<Booth>(BoothInfoAtom);

  return { boothInfo, setBoothInfo };
};

export default useBoothInfo;
