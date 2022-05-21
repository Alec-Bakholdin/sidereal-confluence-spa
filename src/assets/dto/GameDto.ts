export interface GameDto {
  id: number;
  state: "Lobby" | "PreGame" | "InProgress" | "PostGame";
  phase?: "Trade" | "Economy" | "ConfluenceBidding" | "ConfluenceBuying";
}

export default GameDto;
