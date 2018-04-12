import ColumnOrder from "./ColumnOrder";
import ColumnSize from "./ColumnSize";
import { BreakpointValue } from "../media";
import { ThemeProperties } from "../theme";

export default interface ColumnProperties extends ThemeProperties {
  order?: BreakpointValue<ColumnOrder>;
  size?: BreakpointValue<ColumnSize>;
}