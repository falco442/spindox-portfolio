import {Street} from "./street";
import {Timezone} from "./timezone";
import {GeoCoordinates} from "./coordinates";

export interface LocationAddr {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: GeoCoordinates;
  timezone: Timezone;
}
