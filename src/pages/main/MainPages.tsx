import { useEffect, useState } from "react";
import { useGetWaitings } from "@hooks/apis/booth";
import MainWaitingCard from "./_components/MainWaitingCard";
import * as S from "./MainPage.styled";
import TagList from "./_components/tag/TagList";
import Spinner from "@components/spinner/Spinner";
import { WaitingStatusParams } from "@linenow-types/status";

const MainPage = () => {
  const [selectedTag, setSelectedTag] = useState<string>("전체보기");
  const [waitingCount, setWaitingCount] = useState<number>(0);
  const [callingCount, setCallingCount] = useState<number>(0);
  const [arrivedCount, setArrivedCount] = useState<number>(0);
  const [canceledCount, setCanceledCount] = useState<number>(0);

  const getStatus = (tag: string): WaitingStatusParams => {
    switch (tag) {
      case "대기 중":
        return "waiting";
      case "호출 중":
        return "calling";
      case "입장 완료":
        return "arrived";
      case "대기 취소":
        return "canceled";
      default:
        return undefined;
    }
  };

  // API hooks
  const { data: waitings, isLoading } = useGetWaitings(getStatus(selectedTag));

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  };

  useEffect(() => {
    const waitingCount = waitings?.filter(
      (item) => item.waitingStatus === "waiting"
    ).length;
    const callingCount = waitings?.filter(
      (item) =>
        item.waitingStatus === "ready_to_confirm" ||
        item.waitingStatus === "confirmed"
    ).length;
    const arrivedCount = waitings?.filter(
      (item) => item.waitingStatus === "arrived"
    ).length;
    const canceledCount =
      (waitings?.filter((item) => item.waitingStatus === "canceled").length ||
        0) +
      (waitings?.filter((item) => item.waitingStatus === "time_over_canceled")
        .length || 0);

    setWaitingCount(waitingCount || 0);
    setCallingCount(callingCount || 0);
    setArrivedCount(arrivedCount || 0);
    setCanceledCount(canceledCount || 0);
  }, []);

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

      {waitings && waitings.length > 0 ? (
        <S.MainWaitingCardList>
          <S.MainWaitingCardListScroll>
            {waitings.map((item, index) => (
              <MainWaitingCard key={index} waiting={item} />
            ))}
          </S.MainWaitingCardListScroll>
        </S.MainWaitingCardList>
      ) : (
        <S.MainNoWaiting>아직 대기가 없어요 :(</S.MainNoWaiting>
      )}
    </>
  );
};

export default MainPage;
