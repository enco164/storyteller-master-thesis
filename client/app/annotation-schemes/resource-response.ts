import {Links} from "./links";
import {Meta} from "./meta";

export interface ResourceResponse<T> {
  data: T[];
  links: Links;
  meta: Meta;
}
