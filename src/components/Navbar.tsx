import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import { MdAccountBalance, MdArrowDropDown } from "react-icons/md";
import {
  CiWavePulse1,
  CiShuffle,
  CiServer,
  CiUser,
  CiCoinInsert,
} from "react-icons/ci";

import { CustomNavlink, SyncButton } from "@/components";

const icons = {
  chevron: <MdArrowDropDown fill="currentColor" size={20} />,
  scale: (
    <CiCoinInsert className="text-warning" fill="currentColor" size={40} />
  ),
  activity: (
    <CiWavePulse1 className="text-secondary" fill="currentColor" size={40} />
  ),
  flash: <CiShuffle className="text-primary" fill="currentColor" size={40} />,
  server: <CiServer className="text-success" fill="currentColor" size={40} />,
  user: <CiUser className="text-danger" fill="currentColor" size={40} />,
};

export function CustomNavbar() {
  return (
    <Navbar>
      <NavbarBrand>
        <MdAccountBalance
          className="text-white font-bold"
          fill="currentColor"
          size={24}
        />
        <p className="font-bold text-inherit">EB</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                endContent={icons.chevron}
                radius="sm"
                variant="light"
              >
                Features
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="autoscaling"
              description="ACME scales apps to meet user demand, automagically, based on load."
              startContent={icons.scale}
            >
              Autoscaling
            </DropdownItem>
            <DropdownItem
              key="usage_metrics"
              description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
              startContent={icons.activity}
            >
              Usage Metrics
            </DropdownItem>
            <DropdownItem
              key="production_ready"
              description="ACME runs on ACME, join us and others serving requests at web scale."
              startContent={icons.flash}
            >
              Production Ready
            </DropdownItem>
            <DropdownItem
              key="99_uptime"
              description="Applications stay on the grid with high availability and high uptime guarantees."
              startContent={icons.server}
            >
              +99% Uptime
            </DropdownItem>
            <DropdownItem
              key="supreme_support"
              description="Overcome any challenge with a supporting team ready to respond."
              startContent={icons.user}
            >
              +Supreme Support
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <CustomNavlink to="/" color="secondary" text="Balances" />
        <CustomNavlink to="/activity" color="secondary" text="Activity" />
        <CustomNavlink
          to="/integrations"
          color="secondary"
          text="Integrations"
        />
      </NavbarContent>
      <NavbarContent justify="end">
        {" "}
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <SyncButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
