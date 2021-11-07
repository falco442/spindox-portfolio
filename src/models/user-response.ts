import {Info} from "./info";
import {User} from "./user";

export interface UserResponse {
  info: Info;
  results: User[];
}
