import Circle from "../components/circle";

const layout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="relative h-screen overflow-hidden overflow-y-scroll">
      <div className="h-screen w-screen absolute flex justify-start">
        <Circle h={80} w={80} border={20} borderColor="#E52629" translateX={20} translateY={150} />
        <Circle h={200} w={200} border={40} borderColor="#E52629" translateX={-150} translateY={-80} />
      </div>

      <div className="h-screen w-screen absolute flex justify-end items-end">
        <Circle h={80} w={80} border={20} borderColor="#E52629" translateX={80} translateY={0} />
        <Circle h={200} w={200} border={40} borderColor="#E52629" translateX={100} translateY={80} />
      </div>

      <img
        className="fixed -z-10 object-cover w-screen h-screen"
        src={"/bg-patern-mercarte.png"}
        alt="background merkarte"
        height={1280}
        width={720}
      />
      <div className="relative z-20 h-full">{children}</div>
    </main>
  );
};

export default layout;
