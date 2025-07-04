
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

type filterProps = {
    sortField: (value:string)=>void,
    listValues: string[]
}

const InternshipFilterComponent = ({sortField,listValues}:filterProps) => {
    const [open, setOpen] = useState(false)
     const [value, setValue] = useState("")
     const handleCurrentValue = (value:string) =>{
        sortField(value)
      }
      const frameworks = listValues.map((data)=>{
        return {
            label:data,
            value:data
        }
      })
  return (
    <Popover open={open} onOpenChange={setOpen}>
    <PopoverTrigger asChild>
      <Button
        variant="outline"
        role="combobox"
        aria-expanded={open}
        className=" justify-between p-1 px-3"
      >
       
        <ListFilter className="" />
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-[200px] p-0">
      <Command>
        <CommandList>
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  handleCurrentValue(currentValue)
                  setOpen(false)
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
  )
}

export default InternshipFilterComponent