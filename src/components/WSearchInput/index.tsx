import React, { Fragment } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, GlobeEuropeAfricaIcon } from "@heroicons/react/20/solid";
import { ILocation } from "../../models/location.model";

interface IProps {
  onChangeLocation: (newLocation: ILocation) => void;
  selectedLocation: ILocation;
  query: string;
  onChangeInputQuery: (value: string) => void;
  resultOfAutocompleteQuery: any;
}
const WSearchInput: React.FC<IProps> = ({
  resultOfAutocompleteQuery,
  onChangeLocation,
  selectedLocation,
  query,
  onChangeInputQuery,
}) => {
  return (
    <div className="flex justify-center items-center h-20">
      <div className="top-5 w-full mx-10 lg:w-2/3">
        <Combobox value={selectedLocation} onChange={onChangeLocation}>
          <div className="relative mt-1">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Input
                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                onChange={(event) => onChangeInputQuery(event.target.value)}
                data-value={selectedLocation}
                placeholder="Start typing the name of your city..."
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <GlobeEuropeAfricaIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => onChangeInputQuery("")}
            >
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {resultOfAutocompleteQuery?.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  resultOfAutocompleteQuery?.map((location: ILocation) => (
                    <Combobox.Option
                      key={location.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-gray-600 text-white" : "text-gray-900"
                        }`
                      }
                      value={location}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {location.name}, {location.country}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? "text-white" : "text-gray-600"
                              }`}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    </div>
  );
};

export default WSearchInput;
