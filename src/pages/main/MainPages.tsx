import { useEffect, useState } from "react";
import {
  useGetWaitings,
  useGetWaiting,
  useGetArrived,
  useGetCalling,
  useGetCanceled,
} from "@hooks/apis/booth";
import MainWaitingCard from "./_components/MainWaitingCard";
import * as S from "./MainPage.styled";
import TagList from "./_components/tag/TagList";
import { Waiting } from "@interfaces/waiting";
import Spinner from "@components/spinner/Spinner";

const MainPage = () => {
  const [selectedTag, setSelectedTag] = useState<string>("전체보기");
  const [waitings, setWaitings] = useState<Waiting[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [waitingCount, setWaitingCount] = useState<number>(0);
  const [callingCount, setCallingCount] = useState<number>(0);
  const [arrivedCount, setArrivedCount] = useState<number>(0);
  const [canceledCount, setCanceledCount] = useState<number>(0);

  // API hooks
  const { refetch: refetchWaitings } = useGetWaitings();
  const { refetch: refetchWaiting } = useGetWaiting();
  const { refetch: refetchCalling } = useGetCalling();
  const { refetch: refetchArrived } = useGetArrived();
  const { refetch: refetchCanceled } = useGetCanceled();

  useEffect(() => {
    updateCounts();
    fetchData(selectedTag);
  }, []);

  const fetchData = async (tag: string) => {
    setIsLoading(true);
    try {
      let responseData;
      switch (tag) {
        case "대기 중":
          responseData = await refetchWaiting();
          break;
        case "호출 중":
          responseData = await refetchCalling();
          break;
        case "입장 완료":
          responseData = await refetchArrived();
          break;
        case "대기 취소":
          responseData = await refetchCanceled();
          break;
        default:
          responseData = await refetchWaitings();
      }

      setWaitings(responseData.data || []);
    } catch (error) {
      // console.error("데이터 오류 발생", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    fetchData(tag);
  };

  const updateCounts = () => {
    refetchWaitings().then((response) => {
      const data = response.data || [];
      const waitingCount = data.filter(
        (item) => item.waitingStatus === "waiting"
      ).length;
      const callingCount = data.filter(
        (item) =>
          item.waitingStatus === "ready_to_confirm" ||
          item.waitingStatus === "confirmed"
      ).length;
      const arrivedCount = data.filter(
        (item) => item.waitingStatus === "arrived"
      ).length;
      const canceledCount = data.filter(
        (item) => item.waitingStatus === "canceled"
      ).length;

      setWaitingCount(waitingCount);
      setCallingCount(callingCount);
      setArrivedCount(arrivedCount);
      setCanceledCount(canceledCount);
    });
  };

  if (isLoading) {
    return (
      <div style={{ display: "flex", height: "100%" }}>
        <Spinner />
      </div>
    );
  }
  return (
    <>
      <TagList
        selectedTag={selectedTag}
        onTagClick={handleTagClick}
        waitingCount={waitingCount}
        callingCount={callingCount}
        arrivedCount={arrivedCount}
        canceledCount={canceledCount}
      />
      <S.MainWaitingCardList>
        {waitings.map((item, index) => (
          <MainWaitingCard key={index} waiting={item} />
        ))}
      </S.MainWaitingCardList>
    </>
  );
};

export default MainPage;
