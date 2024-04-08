import Circle from "../components/circle";

const layout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="relative h-screen w-screen overflow-hidden overflow-y-scroll">
      <Circle h={300} w={300} border={40} borderColor="#E52629" translateX={-150} translateY={-150} />
      <img
        className="fixed -z-10 object-cover w-full h-full"
        src={"/bg-patern-mercarte.png"}
        alt="background merkarte"
        height={1280}
        width={720}
      />

      <div className="relative z-20 h-screen p-2 md:p-12">{children}</div>
    </main>
  );
};

export default layout;
