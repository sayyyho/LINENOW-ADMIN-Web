export type WaitingStatus =
  | "waiting"
  | "ready_to_confirm"
  | "confirmed"
  | "arrived"
  | "canceled";

export type ManagerActionStatus = "call" | "confirm" | "cancel";

export type BoothStatus = "not_started" | "operating" | "finished" | "paused";
