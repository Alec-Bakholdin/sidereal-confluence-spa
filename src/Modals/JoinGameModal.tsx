import React, { ReactElement, useState } from "react";
import BaseModal from "../components/BaseModal/BaseModal";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  closeJoinGameModal,
  selectJoinGameModal,
} from "../redux/reducers/modals";
import SiderealTextField from "../components/SiderealTextField/SiderealTextField";
import SiderealButton from "../components/SiderealButton/SiderealButton";
import { joinGame } from "../redux/reducers/game";

export function JoinGameModal(): ReactElement {
  const dispatch = useAppDispatch();
  const open = useAppSelector(selectJoinGameModal);
  const handleClose = () => {
    dispatch(closeJoinGameModal());
  };
  const [id, setId] = useState<number>(0);
  const handleSubmit = () => {
    handleClose();
    dispatch(joinGame({ id }));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(parseInt(e.target.value));
  };
  console.log(open);

  return (
    <BaseModal open={open} onClose={handleClose} title={"Join Game"}>
      <SiderealTextField
        label={"id"}
        onChange={handleChange}
        onEnterPressed={handleSubmit}
      />
      <SiderealButton onClick={handleSubmit} name={"join game"} />
    </BaseModal>
  );
}

export default JoinGameModal;
