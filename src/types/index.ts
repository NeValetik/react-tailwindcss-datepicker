import { MouseEventHandler, ReactNode } from "react";

import { COLORS, DATE_LOOKING_OPTIONS, DAYS } from "../constants";

export type DateType = null | Date;

export interface Period {
    start: DateType;
    end: DateType;
}

interface CustomShortcuts {
    [key: string]: ShortcutsItem;
}

interface DefaultShortcuts {
    today?: string;
    yesterday?: string;
    past?: (period: number) => string;
    currentMonth?: string;
    pastMonth?: string;
}
export interface Configs {
    shortcuts?: DefaultShortcuts | CustomShortcuts;
    footer?: {
        cancel?: string;
        apply?: string;
    };
}

export interface ShortcutsItem {
    text: string;
    daysNumber?: number;
    period: {
        start: Date;
        end: Date;
    };
}

export type DateRangeType = {
    startDate: DateType;
    endDate: DateType;
};

export type DateValueType = DateRangeType | null;

export type ClassNameType = ((className: string) => string) | string | null;

export interface DayClassNameInfo {
    date: Date;
    type: "previous" | "current" | "next";
    isToday: boolean;
    isSelected: boolean;
    isInRange: boolean;
    isRangeStart: boolean;
    isRangeEnd: boolean;
    isHovered: boolean;
    isDisabled: boolean;
    defaultClassName: string;
}

export interface WeekDayClassNameInfo {
    dayName: string;
    index: number;
}

export interface MonthClassNameInfo {
    month: number;
    isCurrent: boolean;
    isDisabled: boolean;
}

export interface YearClassNameInfo {
    year: number;
    isCurrent: boolean;
    isDisabled: boolean;
}

export interface ShortcutItemClassNameInfo {
    key: string;
    text: string;
    defaultClassName: string;
}

export type ClassNamesTypeProp = {
    container?: (p?: object | null | undefined) => string | undefined;
    input?: (p?: object | null | undefined) => string | undefined;
    toggleButton?: (p?: object | null | undefined) => string | undefined;
    footer?: (p?: object | null | undefined) => string | undefined;

    // popup / calendar shell
    popup?: (defaultClassName: string) => string;
    calendarContainer?: string;
    calendarHeader?: string;
    prevButton?: string;
    nextButton?: string;
    monthButton?: string;
    yearButton?: string;

    // week header
    weekContainer?: string;
    weekDay?: (info: WeekDayClassNameInfo) => string;

    // days grid
    daysContainer?: string;
    day?: (info: DayClassNameInfo) => string;

    // month picker
    monthsContainer?: string;
    month?: (info: MonthClassNameInfo) => string;

    // year picker
    yearsContainer?: string;
    year?: (info: YearClassNameInfo) => string;

    // shortcuts sidebar
    shortcutsContainer?: string;
    shortcutItem?: (info: ShortcutItemClassNameInfo) => string;
};

export type PopoverDirectionType = "up" | "down";

export type WeekStringType = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export type WeekDaysIndexType = (typeof DAYS)[number];

export type DateLookingType = (typeof DATE_LOOKING_OPTIONS)[number];

export type WeekDayLengthType = 1 | 2 | 3 | "full";

export interface DatepickerType {
    primaryColor?: ColorKeys;
    value: DateValueType;
    onChange: (value: DateValueType, e?: HTMLInputElement | null | undefined) => void;
    useRange?: boolean;
    showFooter?: boolean;
    showShortcuts?: boolean;
    configs?: Configs;
    asSingle?: boolean;
    placeholder?: string;
    separator?: string;
    startFrom?: DateType;
    i18n?: string;
    disabled?: boolean;
    classNames?: ClassNamesTypeProp;
    containerClassName?: ClassNameType;
    popupClassName?: ClassNameType;
    inputClassName?: ClassNameType;
    toggleClassName?: ClassNameType;
    toggleIcon?: (open: boolean) => ReactNode;
    inputId?: string;
    inputName?: string;
    displayFormat?: string;
    readOnly?: boolean;
    minDate?: DateType;
    maxDate?: DateType;
    dateLooking?: DateLookingType;
    disabledDates?: DateRangeType[];
    startWeekOn?: WeekStringType;
    popoverDirection?: PopoverDirectionType;
    required?: boolean;
    weekDayLength?: WeekDayLengthType;
    portalContainer?: HTMLElement | null;
    chevronLeftIcon?: ReactNode;
    chevronRightIcon?: ReactNode;
    doubleChevronLeftIcon?: ReactNode;
    doubleChevronRightIcon?: ReactNode;
    renderPrevButton?: (props: ChevronButtonRenderProps) => ReactNode;
    renderNextButton?: (props: ChevronButtonRenderProps) => ReactNode;
    renderDoublePrevButton?: (props: ChevronButtonRenderProps) => ReactNode;
    renderDoubleNextButton?: (props: ChevronButtonRenderProps) => ReactNode;
}

export interface ChevronButtonRenderProps {
    onClick: () => void;
    children: ReactNode;
}

export type ColorKeys = (typeof COLORS)[number]; // "blue" | "orange"

export interface Colors {
    [key: string]: {
        [K in ColorKeys]: string;
    };
}

export interface IconProps {
    className: string;
}

export interface ButtonProps {
    children: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    roundedFull?: boolean;
    padding?: string;
    active?: boolean;
}
