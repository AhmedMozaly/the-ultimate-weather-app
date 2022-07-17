import { HTMLProps, JSXElementConstructor } from "react";
import cn from "classnames";

interface Props extends HTMLProps<HTMLDivElement> {
  Icon: JSXElementConstructor<any>;
  text: string;
  isLoading?: boolean;
}

const WeatherInfo = ({
  Icon,
  text,
  className,
  isLoading = false,
  ...props
}: Props) => {
  return (
    <div className={cn("flex items-center", className)} {...props}>
      <div className="w-16">
        <Icon width={32} height={32} className="mx-auto" />
      </div>
      {text}
    </div>
  );
};

export default WeatherInfo;
