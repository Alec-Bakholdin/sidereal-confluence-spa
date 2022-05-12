import JoinGameModal from "./JoinGameModal/JoinGameModal";
import { ReactElement } from "react";
import PlayerDetailsModal from "./PlayerDetailsModal/PlayerDetailsModal";

import "./Modals.scss";
import UpdateResourcesModal from "./UpdateResourcesModal/UpdateResourcesModal";
import CardActionModal from "./CardActionModal/CardActionModal";

export function Modals(): ReactElement {
  return (
    <>
      <PlayerDetailsModal />
      <JoinGameModal />
      <UpdateResourcesModal />
      <CardActionModal />
    </>
  );
}

export default Modals;
