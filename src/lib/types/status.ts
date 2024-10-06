export type WaitingStatus =
  | "waiting"
  | "ready_to_confirm"
  | "confirmed"
  | "arrived"
  | "canceled";

export type ManagerActionStatus = "call" | "confirm" | "cancel";
