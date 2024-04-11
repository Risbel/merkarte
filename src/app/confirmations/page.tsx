import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { IConfirmations } from "../actions/confirmTypes";
import { getConfirmations } from "../actions/confirmActions";
import Circle from "../components/circle";

const Confirmations = async () => {
  const confirmations: IConfirmations = await getConfirmations();

  return (
    <div className="relative overflow-hidden">
      <div className="h-screen w-screen absolute flex justify-start">
        <Circle h={80} w={80} border={20} borderColor="#E52629" translateX={20} translateY={150} />
        <Circle h={200} w={200} border={40} borderColor="#E52629" translateX={-150} translateY={-80} />
      </div>

      <div className="h-screen w-screen absolute flex justify-end items-end">
        <Circle h={80} w={80} border={20} borderColor="#E52629" translateX={80} translateY={0} />
        <Circle h={200} w={200} border={40} borderColor="#E52629" translateX={100} translateY={80} />
      </div>

      <img
        className="absolute -z-10 object-cover w-full h-screen"
        src={"/bg-patern-mercarte.png"}
        alt="background merkarte"
        height={1280}
        width={720}
      />

      <div className="p-4 lg:p-16 relative h-screen overflow-hidden overflow-y-scroll">
        <Link
          className="fixed bg-white z-40 flex bg-primary text-secondary hover:opacity-90 pr-3 py-2 rounded-lg shadow-md w-[100px] text-nowrap"
          href={"/"}
        >
          <ChevronLeft /> <span className="font-semibold">Go back</span>
        </Link>

        <div className="flex flex-col items-center p-8">
          <h1 className="text-2xl lg:text-3xl font-semibold text-[#51412e]">Confirmations:</h1>
          <div className="flex flex-wrap gap-4 py-4 lg:py-8">
            {confirmations.results.map((item) => {
              return (
                <div
                  className="flex flex-wrap justify-between gap-8 w-full lg:w-auto border-2 border-primary p-4 rounded-xl bg-white/40 backdrop-blur-sm shadow-xl"
                  key={item.id}
                >
                  <div>
                    <p className="font-semibold text-[#51412e] text-xl">
                      👤 {item.first_name} {item.last_name}
                    </p>
                    <p>✉️ {item.email}</p>
                    <p>📞 {item.phone}</p>
                    <p>{item.address && `🗺️ ${item.address}`}</p>
                    <p>{item.company && `Company: ${item.company}`}</p>
                  </div>

                  {item.companions.length > 0 && (
                    <div className="flex-1 flex flex-col">
                      <p className="text-xl font-semibold text-[#51412e]">Companions:</p>
                      <ul>
                        {item.companions.map((item) => {
                          return (
                            <li key={item.id}>
                              ▪️ {item.first_name} {item.last_name}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmations;

export const runtime = "edge";
