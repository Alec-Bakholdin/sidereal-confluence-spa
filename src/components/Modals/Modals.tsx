import JoinGameModal from "./JoinGameModal/JoinGameModal";
import { ReactElement } from "react";
import PlayerDetailsModal from "./PlayerDetailsModal/PlayerDetailsModal";

import "./Modals.scss";

export function Modals(): ReactElement {
  return (
    <>
      <PlayerDetailsModal />
      <JoinGameModal />
    </>
  );
}

export default Modals;
