import React from "react";
import clsx from "clsx";
import { RadioGroup } from "@headlessui/react";
import { ITemperatureUnit } from "../../models/temperature-unit.model";

interface IProps {
  selectedUnit: ITemperatureUnit;
  units: ITemperatureUnit[];
  onChangeUnit: (unit: ITemperatureUnit) => void;
}
const WRadioGroup: React.FC<IProps> = ({
  selectedUnit,
  units,
  onChangeUnit,
}) => {
  return (
    <RadioGroup className="cols-span-1" value={selectedUnit} onChange={onChangeUnit}>
      <div className="flex items-center space-x-3">
        {units.map((unit) => (
          <RadioGroup.Option
            key={unit.value}
            value={unit}
            className={({ checked }) =>
               clsx(
                "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none",
                {
                  "bg-black text-white":  checked,
                }
              )
            }
          >
            <p className="absolute">{unit.name}</p>
            <span
              aria-hidden="true"
              className={clsx(
                "h-10 w-10 rounded-full border border-black border-opacity-10"
              )}
            />
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default WRadioGroup;
