import { useLocation, useNavigate } from "react-router-dom";
import { Link, LinkVariantProps, NavbarItem } from "@nextui-org/react";
import { useEffect, useState } from "react";

type Props = {
  to: string;
  color?: LinkVariantProps["color"];
  text: string;
};

export const CustomNavlink = (props: Props) => {
  const location = useLocation();

  const [isActive, setActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setActive(location.pathname === props.to);
  }, [location]);

  const handleClick = () => {
    navigate(props.to);
  };

  //   <NavbarItem>
  //   <Link color="foreground" href="#">
  //     Balances
  //   </Link>
  // </NavbarItem>
  return (
    <NavbarItem>
      <Link
        onClick={handleClick}
        color={isActive ? props.color : "foreground"}
        href="#"
      >
        {props.text}
      </Link>
    </NavbarItem>
  );
};
