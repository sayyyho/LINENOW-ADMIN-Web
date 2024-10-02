import { delay, http, HttpResponse } from 'msw';

//dummy
import { dummyWaitingsResponse } from './dummy/waitings';

const COMMON_DELAY = 0;

const getDelayedResponse = (responseData: any) => {
  return async () => {
    await delay(COMMON_DELAY);
    return HttpResponse.json(responseData);
  };
};

export const handlers = [
  http.get(
    '/api/v1/manager/booths/booth_id/waitings',
    getDelayedResponse(dummyWaitingsResponse)
  ),

  // post 로그인 api 테스트용
  http.post('/api/v1/manager/login', async ({ request }) => {
    const data = {
      accessToken: '123456789',
    };

    const result: any = await request.json();
    const id = result?.id;

    // 고유번호가 '12345'일 경우 성공
    if (id === '12345') {
      return new HttpResponse(JSON.stringify(data), {
        status: 200,
      });
    } else {
      return new HttpResponse(null, {
        status: 400,
        statusText: 'fail',
      });
    }
  }),
];
