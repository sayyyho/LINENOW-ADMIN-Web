import { WaitingStatus } from "@linenow-types/status";
import { User } from "./user";

export interface Waiting {
  waitingID: number;
  waitingStatus: WaitingStatus;
  waitingTeamsAhead?: number;
  waitingCount?: number;

  partySize: number;

  user: User;

  confirmRemainingTime?: string;
  arrivalRemainingTime?: string;

  registeredAt: string;
  // readyToConfirmAt?: string;
  // confirmedAt?: string;
  // canceledAt?: string;
}
