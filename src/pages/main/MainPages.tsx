import { useGetWaitings } from "@hooks/apis/booth";
import MainWaitingCard from "./_components/MainWaitingCard";
import * as S from "./MainPage.styled";
import { useEffect, useState } from "react";
import { Waiting } from "@interfaces/waiting";

const MainPage = () => {
  const { data, isLoading, isError } = useGetWaitings();
  const [waitings, setWaitings] = useState<Waiting[]>([]);

  useEffect(() => {
    setWaitings(data || []);
  }, [isLoading, isError, data]);

  return isLoading ? null : (
    <S.MainWaitingCardList>
      {waitings.map((item, index) => (
        <MainWaitingCard key={index} waiting={item} />
      ))}
    </S.MainWaitingCardList>
  );
};
export default MainPage;
