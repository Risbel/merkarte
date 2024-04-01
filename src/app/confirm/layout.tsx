const layout = ({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="relative h-screen w-screen">
      <img
        className="absolute -z-10 object-cover w-full h-full"
        src={"/abstrack_backhround_blue__generated.jpg"}
        alt="background merkarte"
        height={1280}
        width={720}
      />
      <div className="relative z-20 h-screen p-2 md:p-12">{children}</div>
    </main>
  );
};

export default layout;
