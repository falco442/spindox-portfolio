import {Name} from "./name";
import {Login} from "./login";
import {DobOrRegistered} from "./dob-or-registered";
import {Id} from "./id";
import {Picture} from "./picture";
import {LocationAddr} from "./location";

export interface User {
  gender: string;
  name: Name;
  location: LocationAddr;
  email: string;
  login: Login;
  dob: DobOrRegistered;
  registered: DobOrRegistered;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}
