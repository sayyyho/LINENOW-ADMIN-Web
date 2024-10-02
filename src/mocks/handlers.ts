import { delay, http, HttpResponse } from "msw";

//dummy
import { dummyWaitingsResponse } from "./dummy/waitings";

const COMMON_DELAY = 0;

const getDelayedResponse = (responseData: any) => {
  return async () => {
    await delay(COMMON_DELAY);
    return HttpResponse.json(responseData);
  };
};

export const handlers = [
  http.get(
    "/api/v1/manager/booths/booth_id/waitings",
    getDelayedResponse(dummyWaitingsResponse)
  ),
];
