import { Button } from "@nextui-org/react";
import { MdCloudUpload } from "react-icons/md";
import { Link } from "react-router-dom";

export const SyncButton = () => {
  return (
    <Button
      as={Link}
      color="secondary"
      href="#"
      variant="flat"
      size="md"
      startContent={<MdCloudUpload size={20} />}
    >
      Sync
    </Button>
  );
};
