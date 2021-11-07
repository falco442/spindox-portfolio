import {Name} from "./name";
import {Login} from "./login";
import {DobOrRegistered} from "./dob-or-registered";
import {Id} from "./id";
import {Picture} from "./picture";

export interface User {
  gender: string;
  name: Name;
  location: Location;
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
