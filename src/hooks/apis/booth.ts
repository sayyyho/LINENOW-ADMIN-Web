import {
  getArrived,
  getCalling,
  getCanceled,
  getWaiting,
  getWaitings,
} from "@apis/domains/booth/apis";
import { BOOTH_QUERY_KEY } from "@apis/domains/booth/queries";
import { useQuery } from "@tanstack/react-query";

export const useGetWaitings = () => {
  return useQuery({
    queryKey: [BOOTH_QUERY_KEY.WAITINGS],
    queryFn: () => getWaitings(),
  });
};

export const useGetWaiting = () => {
  return useQuery({
    queryKey: [BOOTH_QUERY_KEY.WAITINGS],
    queryFn: () => getWaiting(),
  });
};

export const useGetCalling = () => {
  return useQuery({
    queryKey: [BOOTH_QUERY_KEY.WAITINGS],
    queryFn: () => getCalling(),
  });
};

export const useGetArrived = () => {
  return useQuery({
    queryKey: [BOOTH_QUERY_KEY.WAITINGS],
    queryFn: () => getArrived(),
  });
};

export const useGetCanceled = () => {
  return useQuery({
    queryKey: [BOOTH_QUERY_KEY.WAITINGS],
    queryFn: () => getCanceled(),
  });
};
