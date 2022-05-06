import JoinGameModal from "./JoinGameModal/JoinGameModal";
import { ReactElement } from "react";
import PlayerDetailsModal from "./PlayerDetailsModal/PlayerDetailsModal";

import "./Modals.scss";
import UpdateResourcesModal from "./UpdateResourcesModal/UpdateResourcesModal";

export function Modals(): ReactElement {
  return (
    <>
      <PlayerDetailsModal />
      <JoinGameModal />
      <UpdateResourcesModal />
    </>
  );
}

export default Modals;
