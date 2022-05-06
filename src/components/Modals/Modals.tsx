import JoinGameModal from "./JoinGameModal/JoinGameModal";
import { ReactElement } from "react";
import PlayerDetailsModal from "./PlayerDetailsModal/PlayerDetailsModal";

export function Modals(): ReactElement {
  return (
    <>
      <PlayerDetailsModal />
      <JoinGameModal />
    </>
  );
}

export default Modals;
