import { Listbox, ListboxItem, cn } from "@nextui-org/react";
import { ItemCounter } from "@/components";
import {
  MdBugReport,
  MdRequestPage,
  MdChat,
  MdPlayCircle,
  MdSettings,
  MdTag,
  MdVerifiedUser,
  MdWatch,
  MdBook,
} from "react-icons/md";

const IconWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => (
  <div
    className={cn(
      className,
      "flex items-center rounded-small justify-center w-7 h-7"
    )}
  >
    {children}
  </div>
);

export function Sidebar() {
  return (
    <Listbox
      aria-label="User Menu"
      onAction={(key) => alert(key)}
      className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small rounded-medium"
      itemClasses={{
        base: "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
      }}
    >
      <ListboxItem
        key="issues"
        endContent={<ItemCounter number={13} />}
        startContent={
          <IconWrapper className="bg-success/10 text-success">
            <MdBugReport className="text-lg " />
          </IconWrapper>
        }
      >
        Issues
      </ListboxItem>
      <ListboxItem
        key="pull_requests"
        endContent={<ItemCounter number={6} />}
        startContent={
          <IconWrapper className="bg-primary/10 text-primary">
            <MdRequestPage className="text-lg " />
          </IconWrapper>
        }
      >
        Pull Requests
      </ListboxItem>
      <ListboxItem
        key="discussions"
        endContent={<ItemCounter number={293} />}
        startContent={
          <IconWrapper className="bg-secondary/10 text-secondary">
            <MdChat className="text-lg " />
          </IconWrapper>
        }
      >
        Discussions
      </ListboxItem>
      <ListboxItem
        key="actions"
        endContent={<ItemCounter number={2} />}
        startContent={
          <IconWrapper className="bg-warning/10 text-warning">
            <MdPlayCircle className="text-lg " />
          </IconWrapper>
        }
      >
        Actions
      </ListboxItem>
      <ListboxItem
        key="projects"
        endContent={<ItemCounter number={4} />}
        startContent={
          <IconWrapper className="bg-default/50 text-foreground">
            <MdSettings className="text-lg " />
          </IconWrapper>
        }
      >
        Projects
      </ListboxItem>
      <ListboxItem
        key="releases"
        className="group h-auto py-3"
        endContent={<ItemCounter number={399} />}
        startContent={
          <IconWrapper className="bg-primary/10 text-primary">
            <MdTag className="text-lg" />
          </IconWrapper>
        }
        textValue="Releases"
      >
        <div className="flex flex-col gap-1">
          <span>Releases</span>
          <div className="px-2 py-1 rounded-small bg-default-100 group-data-[hover=true]:bg-default-200">
            <span className="text-tiny text-default-600">
              @nextui-org/react@2.0.10
            </span>
            <div className="flex gap-2 text-tiny">
              <span className="text-default-500">49 minutes ago</span>
              <span className="text-success">Latest</span>
            </div>
          </div>
        </div>
      </ListboxItem>
      <ListboxItem
        key="contributors"
        endContent={<ItemCounter number={79} />}
        startContent={
          <IconWrapper className="bg-warning/10 text-warning">
            <MdVerifiedUser />
          </IconWrapper>
        }
      >
        Contributors
      </ListboxItem>
      <ListboxItem
        key="watchers"
        endContent={<ItemCounter number={82} />}
        startContent={
          <IconWrapper className="bg-default/50 text-foreground">
            <MdWatch />
          </IconWrapper>
        }
      >
        Watchers
      </ListboxItem>
      <ListboxItem
        key="license"
        endContent={<span className="text-small text-default-400">MIT</span>}
        startContent={
          <IconWrapper className="bg-danger/10 text-danger dark:text-danger-500">
            <MdBook />
          </IconWrapper>
        }
      >
        License
      </ListboxItem>
    </Listbox>
  );
}
