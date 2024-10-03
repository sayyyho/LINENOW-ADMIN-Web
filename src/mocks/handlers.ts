import { delay, http, HttpResponse } from "msw";

//dummy
import {
  dummyArrivedResponse,
  dummyCallingResponse,
  dummyCanceledResponse,
  dummyWaitingResponse,
  dummyWaitingsResponse,
} from "./dummy/waitings";

const COMMON_DELAY = 0;

const getDelayedResponse = (responseData: any) => {
  return async () => {
    await delay(COMMON_DELAY);
    return HttpResponse.json(responseData);
  };
};

export const handlers = [
  http.get(
    "/api/v1/manager/booths/waitings",
    getDelayedResponse(dummyWaitingsResponse)
  ),
  http.get(
    "/api/v1/manager/booths/waiting",
    getDelayedResponse(dummyWaitingResponse)
  ),
  http.get(
    "/api/v1/manager/booths/calling",
    getDelayedResponse(dummyCallingResponse)
  ),
  http.get(
    "/api/v1/manager/booths/arrived",
    getDelayedResponse(dummyArrivedResponse)
  ),
  http.get(
    "/api/v1/manager/booths/canceled",
    getDelayedResponse(dummyCanceledResponse)
  ),
];
