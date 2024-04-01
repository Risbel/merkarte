"use server";

import { revalidateTag } from "next/cache";
import { IConfirmations } from "./confirmTypes";
import { Person } from "@/app/[lang]/confirm/components/GuestsInput";

export const addConfirmations = async (e: FormData, inputList: Person[]) => {
  const event = e.get("event")?.toString();
  const first_name = e.get("first_name")?.toString();
  const last_name = e.get("last_name")?.toString();
  const phone = e.get("phone")?.toString();
  const email = e.get("email")?.toString();
  const address = e.get("address")?.toString();
  const company = e.get("company")?.toString();
  const companions: Person[] = inputList;

  if (!first_name || !phone || !email) {
    return;
  }

  const newSubscription = {
    event,
    first_name,
    last_name,
    phone,
    email,
    address,
    company,
    companions,
  };

  await fetch(`https://artworld-api.myaipeople.com/api/subscriptions/`, {
    method: "POST",
    body: JSON.stringify(newSubscription),
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidateTag("subscriptions");
};

export const getConfirmations = async () => {
  const res = await fetch(
    `https://artworld-api.myaipeople.com/api/subscriptions_by_event/ba688a61-71bb-4677-b180-8d40f3c82796/`,
    {
      next: {
        tags: ["subscriptions"],
        revalidate: 3600,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const subscriptions: IConfirmations = await res.json();

  return subscriptions;
};
