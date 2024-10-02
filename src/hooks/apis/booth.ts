import { getWaitings } from "@apis/domains/booth/apis";
import { BOOTH_QUERY_KEY } from "@apis/domains/booth/queries";
import { useQuery } from "@tanstack/react-query";

export const useGetWaitings = () => {
  return useQuery({
    queryKey: [BOOTH_QUERY_KEY.WAITINGS],
    // TODO:- Booth ID 추가
    queryFn: () => getWaitings("booth_id"),
  });
};
