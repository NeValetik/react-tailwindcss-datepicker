import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const TodayDayContent = ({ children }: Props) => (
    <span className="inline-block border-b-2 border-solid border-current pt-1.5 pb-1">
        {children}
    </span>
);

export default TodayDayContent;
