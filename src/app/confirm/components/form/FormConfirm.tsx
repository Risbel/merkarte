"use client";

import { useRef, useState } from "react";

import GuestsInput, { Person } from "./GuestsInput";
import { redirect } from "next/navigation";
import { addConfirmations } from "@/app/actions/confirmActions";
import ConfirmButton from "./ConfirmButton";

const FormConfirm = () => {
  const [inputList, setInputList] = useState<Person[]>([]);
  const ref = useRef<HTMLFormElement>(null);

  return (
    <div className="border-4 shadow-md border-white">
      <div className="flex flex-col border-8 shadow-inner shadow-slate-500 border-white p-4 md:p-6 bg-white/40 backdrop-blur-3xl">
        <div className="flex flex-col w-full mb-4">
          <p className="text-md md:text-2xl text-center text-primary font-semibold">Confirmar asistencia</p>
        </div>

        <form
          ref={ref}
          action={async (formData) => {
            await addConfirmations(formData, inputList);
            ref.current?.reset();
            redirect("/");
          }}
          className="flex flex-col w-full"
        >
          <input type="text" hidden defaultValue={"cb1196fd-cb0b-4a04-b443-e0caf127315d"} name="event" />
          <div className="flex gap-2">
            <div className="flex flex-col w-2/5">
              <label className="pl-2 text-xs text-primary" htmlFor="first_name">
                First Name
              </label>
              <input
                required
                className="border pl-2 py-1 rounded-md h-8 md:h-10 text-xs md:text-base text-[#383529] border-primary"
                placeholder={"first name"}
                min={2}
                type="text"
                name="first_name"
                id="first_name"
                autoComplete="name"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="pl-2 text-xs text-primary" htmlFor="last_name">
                last name
              </label>
              <input
                required
                className="border pl-2 py-1 rounded-md w-full h-8 md:h-10 text-xs md:text-base text-[#383529] border-primary"
                placeholder="last name"
                min={2}
                type="text"
                name="last_name"
                id="last_name"
                autoComplete="additional-name"
              />
            </div>
          </div>
          <div>
            <label className="pl-2 text-xs text-primary" htmlFor="email">
              email
            </label>
            <input
              required
              className="border pl-2 py-1 rounded-md w-full h-8 md:h-10 text-xs md:text-base text-[#383529] border-primary"
              placeholder="email"
              min={2}
              type="email"
              name="email"
              id="email"
              autoComplete="email"
            />
          </div>
          <div>
            <label className="pl-2 text-xs text-primary" htmlFor="phone">
              phone
            </label>
            <input
              required
              className="border pl-2 py-1 rounded-md w-full h-8 md:h-10 text-xs md:text-base text-[#383529] border-primary"
              placeholder="phone"
              min={2}
              type="tel"
              name="phone"
              id="phone"
              autoComplete="tel"
            />
          </div>

          <div>
            <label className="pl-2 text-xs text-primary" htmlFor="address">
              address
            </label>
            <input
              className="border pl-2 py-1 rounded-md w-full h-8 md:h-10 text-xs md:text-base text-[#383529] border-primary"
              placeholder="address"
              min={2}
              type="text"
              name="address"
              id="address"
              autoComplete="address-level1"
            />
          </div>

          <div>
            <label className="pl-2 text-xs text-primary" htmlFor="company">
              company (optional)
            </label>
            <input
              className="border pl-2 py-1 rounded-md w-full h-8 md:h-10 text-xs md:text-base text-[#383529] border-primary"
              placeholder="company"
              min={2}
              type="text"
              name="company"
              id="company"
              autoComplete="off"
            />
          </div>
          <GuestsInput inputList={inputList} setInputList={setInputList} />

          <ConfirmButton />
        </form>
      </div>
    </div>
  );
};

export default FormConfirm;

export interface IPostSubscriptionsResp {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  company: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
