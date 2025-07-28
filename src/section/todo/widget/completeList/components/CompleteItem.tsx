"use client";

import Text from "@/src/shared/ui/Text";
import { CompleteItemProps } from "@/src/types/list-type";
import { X } from "lucide-react";
import { useState } from "react";

const CompleteItem = ({ completedItem, handleDelete }: CompleteItemProps) => {
  return (
    <li className="w-full flex justify-between items-center border-b border-b-gray-200 pb-2">
      <div>
        <Text
          className="line-through text-gray-400"
          basicText={completedItem}
          variant="description"
        />
        <Text basicText="2025.07.27" variant="date" />
      </div>
      <button
        onClick={handleDelete}
        className="w-8 h-8 flex items-center justify-center rounded-full opacity-0 hover:opacity-100 transition-all duration-200 text-red-600"
      >
        <X size={15} strokeWidth={3} />
      </button>
    </li>
  );
};

export default CompleteItem;
