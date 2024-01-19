type Props = {
  children: React.ReactNode;
};

export const ViewLayout = (props: Props) => {
  return <div className="p-5">{props.children}</div>;
};
