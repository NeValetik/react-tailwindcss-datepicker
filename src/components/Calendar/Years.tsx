import { useContext, useMemo } from "react";

import { generateArrayNumber } from "../../helpers";
import RoundedButton from "../RoundedButton";

import DatepickerContext from "contexts/DatepickerContext";

interface Props {
    year: number;
    currentYear: number;
    minYear: number | null;
    maxYear: number | null;
    clickYear: (data: number) => void;
}

const Years = (props: Props) => {
    const { year, currentYear, minYear, maxYear, clickYear } = props;

    const { dateLooking, classNames } = useContext(DatepickerContext);

    const date = useMemo(() => {
        let start: number;
        let end: number;

        switch (dateLooking) {
            case "backward":
                start = year - 11;
                end = year;
                break;
            case "middle":
                start = year - 4;
                end = year + 7;
                break;
            case "forward":
            default:
                start = year;
                end = year + 11;
                break;
        }

        return {
            start,
            end
        };
    }, [dateLooking, year]);

    return (
        <div className={classNames?.yearsContainer ?? "w-full grid grid-cols-2 gap-2 mt-2"}>
            {generateArrayNumber(date.start, date.end).map((item, index) => {
                const isCurrent = currentYear === item;
                const isDisabled =
                    (maxYear !== null && item > maxYear) || (minYear !== null && item < minYear);
                const wrapperClass =
                    typeof classNames?.year === "function"
                        ? classNames.year({ year: item, isCurrent, isDisabled })
                        : undefined;
                const button = (
                    <RoundedButton
                        padding="py-3"
                        onClick={() => {
                            clickYear(item);
                        }}
                        active={isCurrent}
                        disabled={isDisabled}
                    >
                        <>{item}</>
                    </RoundedButton>
                );
                return wrapperClass ? (
                    <div key={index} className={wrapperClass}>
                        {button}
                    </div>
                ) : (
                    <div key={index}>{button}</div>
                );
            })}
        </div>
    );
};

export default Years;
