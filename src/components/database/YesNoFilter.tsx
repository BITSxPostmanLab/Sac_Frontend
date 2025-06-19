import React, { useState } from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ChevronsUpDown, Check } from "lucide-react" 

import { ListFilter } from 'lucide-react';
import { ProgramData } from '@/types'

const frameworks = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },

]
const YesNoFilter = ({
  sortField,
  originalList,
  setFieldData,
}: {
  sortField: (value: "Yes" | "No") => void;
  originalList: ProgramData[];
  setFieldData: (data: ProgramData[]) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const handleCurrentValue = (newValue: string) => {
    if (newValue !== "Yes" && newValue !== "No") {
      setFieldData(originalList); // reset to original if deselected
      return;
    }
    sortField(newValue);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between p-1 px-3"
        >
          <ListFilter />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No option found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    const isSame = currentValue === value;
                    const newVal = isSame ? "" : currentValue;

                    setValue(newVal);
                    handleCurrentValue(newVal);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {framework.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};



export default YesNoFilter