import Resources from "./Resources";
import GamePhase from "./GamePhase";

export interface Converter {
  input?: Resources;
  output?: Resources;
  donations?: Resources;
  phase: GamePhase;
}
export default Converter;
