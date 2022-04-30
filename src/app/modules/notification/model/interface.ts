import { notiType } from "./enum";

export interface INotification {
  type: notiType,
  message: string
}
