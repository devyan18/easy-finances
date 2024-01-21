import { Sidebar } from "@/components";

type Props = {
  children: React.ReactNode;
};

export const ViewLayout = (props: Props) => {
  return (
    <div className="p-5 flex flex-row gap-4">
      <div className="hidden lg:flex">
        <Sidebar />
      </div>
      <div className="flex-1">{props.children}</div>
    </div>
  );
};
