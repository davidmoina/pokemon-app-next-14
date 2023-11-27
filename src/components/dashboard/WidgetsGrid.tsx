"use client";

import { IoCartOutline } from "react-icons/io5";
import { useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget";

export const WidgetsGrid = () => {
  const inCart = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title={String(inCart)}
        icon={<IoCartOutline size={50} className="text-blue-500" />}
        label="Counter"
        subtitle="Products in cart"
        href="/dashboard/counter"
      />
    </div>
  );
};
