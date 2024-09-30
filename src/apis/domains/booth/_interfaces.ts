import { Waiting } from "@interfaces/waiting";
import { WaitingStatus } from "@linenow-types/status";

export interface GetWaitingResponse {
  waiting_id: number;
  waiting_status: WaitingStatus;

  party_size: number;

  user: User;

  confirm_remaining_time: string;
  arrival_remaining_time: string;

  registered_at: string;

  // ready_to_confirm_at?: string;
  // confirmed_at?: string;
  // canceled_at?: string;
}

interface User {
  user_id: number;
  phone_number: string;
  name: string;
}

export interface GetWaitingsResponse extends Array<GetWaitingResponse> {}

export const transformGetWaitingResponse = (
  response: GetWaitingResponse
): Waiting => {
  return {
    waitingID: response.waiting_id,
    waitingStatus: response.waiting_status,

    partySize: response.party_size,

    user: {
      userID: response.user.user_id,
      phoneNumber: response.user.phone_number,
      name: response.user.name,
    },

    confirmRemainingTime: response.confirm_remaining_time,
    arrivalRemainingTime: response.arrival_remaining_time,

    registeredAt: response.registered_at,
  };
};

export const transformGetWaitingsResponse = (
  response: GetWaitingsResponse
): Waiting[] => {
  return response.map(transformGetWaitingResponse);
};
