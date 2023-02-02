import * as Popover from "@radix-ui/react-popover";
import clsx from "clsx";
import { ProgressBar } from "./ProgressBar";

interface HabitDayProps {
  complete: number;
  amount: number;
}

export function HabitDay({ amount, complete }: HabitDayProps) {
  const completePercentage = Math.round((complete / amount) * 100);

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx("w-10 h-10  border-2  rounded-lg", {
          "bg-zinc-900 border-zinc-800": completePercentage === 0,
          "bg-violet-900 border-violet-700":
            completePercentage > 0 && completePercentage < 20,
          "bg-violet-800 border-violet-600":
            completePercentage >= 20 && completePercentage < 40,
          "bg-violet-700 border-violet-500":
            completePercentage >= 40 && completePercentage < 60,
          "bg-violet-600 border-violet-500":
            completePercentage >= 60 && completePercentage < 80,
          "bg-violet-500 border-violet-400": completePercentage >= 80,
        })}
      />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400">Terça-feira</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">
            01/02
          </span>
          <ProgressBar progress={completePercentage} />
          <Popover.Arrow height={10} width={18} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}