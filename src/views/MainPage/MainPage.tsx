import React, { Fragment, useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ITemperatureUnit,
  temperatureUnit,
} from "../../models/temperature-unit.model";
import WSearchInput from "../../components/WSearchInput";
import WRadioGroup from "../../components/WRadioGroup";
import WDayCard from "../../components/WDayCard";
import WHighlightsCard from "../../components/WHighlightsCard";
import {
  ArrowUpCircleIcon,
  ArrowDownCircleIcon,
  ArrowsRightLeftIcon,
  CloudIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import {
  getAutocomleteLocation,
  getWeekWeather,
} from "../../services/weather.service";
import { ICurrentWeather, IWeekWeather } from "../../models/weather.model";
import { getDayName } from "../../utils/get-day.util";
import { ILocation, initialValue } from "../../models/location.model";
import WLoadingSpiner from "../../components/WLoadingSpiner";

const MainPage: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = useState<ITemperatureUnit>(
    temperatureUnit[0]
  );
  const [resultOfAutocompleteQuery, setResultOfAutocompleteQuery] = useState();
  const [weekWeather, setWeekWeather] = useState<IWeekWeather[]>();
  const [currentCity, setCurrentCity] = useState<ILocation>();
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather>();
  const [inputQuery, setInputQuery] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    getAutocomleteLocation(inputQuery).then((data) => {
      setResultOfAutocompleteQuery(data);
    });
    navigate({
      pathname: "/weather",
      search: `?location=${currentCity?.name || "Minsk"}`,
    });
  }, [currentCity?.name, inputQuery, navigate]);

  useEffect(() => {
    getWeekWeather(currentCity?.name || "Minsk").then((data) => {
      setCurrentWeather(data.current);
      setWeekWeather(data.forecast.forecastday);
    });
  }, [currentCity]);

  const onChangeCurrentCityHandler = useCallback((data: any) => {
    console.log(data);
    setCurrentCity(data);
  }, []);

  const onChangeInputQuery = useCallback((value: string) => {
    setInputQuery(value);
  }, []);

  const onChangeUnitHandler = useCallback((unit: ITemperatureUnit) => {
    setSelectedUnit(unit);
  }, []);
  return (
    <div className="flex h-full w-full grid grid-cols-1 bg-gray-200 lg:grid-cols-4">
      <div className="col-span-1 h-screen bg-white">
        <div>
          <WSearchInput
            resultOfAutocompleteQuery={resultOfAutocompleteQuery}
            selectedLocation={currentCity ?? initialValue}
            onChangeLocation={onChangeCurrentCityHandler}
            query={inputQuery}
            onChangeInputQuery={onChangeInputQuery}
          />
          {currentWeather ? (
            <Fragment>
              <span className="flex justify-center">
                <img
                  className="h-1/5  w-1/5  mt-10 lg:h-1/2 lg:w-1/2"
                  src={currentWeather?.condition.icon}
                  alt={currentWeather?.condition.text}
                />
              </span>
              <span className="mt-7 flex justify-center">
                <p className="text-4xl font-extralight lg:text-8xl">
                  {selectedUnit.value === "c"
                    ? `${currentWeather?.temp_c}°C`
                    : `${currentWeather?.temp_f}°F`}
                </p>
              </span>
              <span className="mt-7 flex justify-center">
                <p className="text-lg font-medium lg:text-xl">
                  {currentWeather
                    ? `${getDayName(
                        currentWeather &&
                          new Date(
                            currentWeather.last_updated.substr(0, 10).toString()
                          )
                      )}, ${currentWeather.last_updated.substr(10).toString()}`
                    : "Day"}
                </p>
              </span>
            </Fragment>
          ) : (
            <WLoadingSpiner />
          )}
          <hr className="mx-20 mt-10" />
          <div className="flex mx-20 mt-5">
            <MapPinIcon className="w-8 h-8 mr-4" />
            <p className="text-gray-500 self-center">{currentCity?.name}</p>
          </div>
          <div className="flex mx-20 mt-5">
            <CloudIcon className="w-8 h-8 mr-4" />
            <p className="text-gray-500 self-center">
              {weekWeather && weekWeather[0].day.condition.text}
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-3 w-10/12 mx-auto">
        <div className="w-full mt-10 flex justify-between">
          <p className="text-xl">
            <u>Week</u>
          </p>
          <div className="flex">
            <WRadioGroup
              selectedUnit={selectedUnit}
              units={temperatureUnit}
              onChangeUnit={onChangeUnitHandler}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-10 lg:xl:grid-cols-4 xl:grid-cols-7">
          {weekWeather ? (
            weekWeather?.map((day) => {
              return (
                <WDayCard
                  key={day.date}
                  altText={day.day.condition.text}
                  day={getDayName(new Date(day.date)).substring(0, 3)}
                  icon={day.day.condition.icon}
                  dayTemperature={
                    selectedUnit.value === "c"
                      ? day.day.maxtemp_c
                      : day.day.maxtemp_f
                  }
                  nightTemperature={
                    selectedUnit.value === "c"
                      ? day.day.mintemp_c
                      : day.day.mintemp_f
                  }
                />
              );
            })
          ) : (
            <WLoadingSpiner />
          )}
        </div>
        <h2 className="text-xl font-semibold mt-10">Today's Highlights</h2>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-10 lg:grid-cols-3">
          <WHighlightsCard title="UV Index">
            <p className="text-4xl my-7">{currentWeather?.uv}</p>
          </WHighlightsCard>
          <WHighlightsCard title="Wind Status">
            <p className="text-4xl my-7">{currentWeather?.wind_mph} m/s</p>
            <div className="flex">
              <ArrowsRightLeftIcon className="w-5 h-5 mr-2" />
              <p className="self-center">{currentWeather?.wind_dir}</p>
            </div>
          </WHighlightsCard>
          <WHighlightsCard title="Sunrise & Sunset">
            <div className="flex my-2 mt-4">
              <ArrowUpCircleIcon className="w-12 h-12 text-yellow-500 mr-2" />
              <p className="self-center text-xl">
                {weekWeather && weekWeather[0].astro.sunrise}
              </p>
            </div>
            <div className="flex">
              <ArrowDownCircleIcon className="w-12 h-12 text-yellow-500 mr-2" />
              <p className="self-center text-xl">
                {weekWeather && weekWeather[0].astro.sunset}
              </p>
            </div>
          </WHighlightsCard>
          <WHighlightsCard title="Humidity">
            <p className="text-4xl my-7">{currentWeather?.humidity}%</p>
          </WHighlightsCard>
          <WHighlightsCard title="Visibility">
            <p className="text-4xl my-7">{currentWeather?.vis_km}km</p>
          </WHighlightsCard>
          <WHighlightsCard title="Cloudy">
            <p className="text-4xl my-7">{currentWeather?.cloud}%</p>
          </WHighlightsCard>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
