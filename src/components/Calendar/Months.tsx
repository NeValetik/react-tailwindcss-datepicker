import { useContext, useEffect } from "react";

import { MONTHS } from "../../constants";
import DatepickerContext from "../../contexts/DatepickerContext";
import { dateFormat, loadLanguageModule } from "../../libs/date";
import RoundedButton from "../RoundedButton";

interface Props {
    currentMonth: number;
    clickMonth: (month: number) => void;
}

const Months = (props: Props) => {
    const { currentMonth, clickMonth } = props;

    const { i18n, classNames } = useContext(DatepickerContext);

    useEffect(() => {
        loadLanguageModule(i18n);
    }, [i18n]);

    return (
        <div className={classNames?.monthsContainer ?? "w-full grid grid-cols-2 gap-2 mt-2"}>
            {MONTHS.map(item => {
                const isCurrent = currentMonth === item;
                const wrapperClass =
                    typeof classNames?.month === "function"
                        ? classNames.month({ month: item, isCurrent, isDisabled: false })
                        : undefined;
                const button = (
                    <RoundedButton
                        padding="py-3"
                        onClick={() => {
                            clickMonth(item);
                        }}
                        active={isCurrent}
                    >
                        {dateFormat(new Date(2022, item - 1, 1), "MMM", i18n)}
                    </RoundedButton>
                );
                return wrapperClass ? (
                    <div key={item} className={wrapperClass}>
                        {button}
                    </div>
                ) : (
                    <div key={item}>{button}</div>
                );
            })}
        </div>
    );
};

export default Months;
