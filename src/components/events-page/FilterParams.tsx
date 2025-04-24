"use client";
import React from "react";
import { Button } from "../ui/button";
import clsx from "clsx";

type FilterParamsProps = {
  currentParam: string;
  setCurrentParam: (param: string) => void;
};

const FilterParams = ({ currentParam, setCurrentParam }: FilterParamsProps) => {
  const filterParams = [
    "All",
    "Research Talks",
    "SI Talks",
    "Placement Talks",
    "Academic Talks",
    "PS Talks",
  ];

  return (
    <div className="flex gap-10 text-xl p-5">
      {filterParams.map((ele, index) => {
        return (
          <Button
            key={index}
            onClick={() => setCurrentParam(ele)}
            className={clsx(
              "bg-white text-black text-xl hover:bg-white border-none shadow-none",
              currentParam === ele && "font-bold"
            )}
          >
            {ele}
          </Button>
        );
      })}
    </div>
  );
};

export default FilterParams;
