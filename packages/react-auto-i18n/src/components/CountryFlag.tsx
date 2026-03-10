import React from "react";
import { CountryCode } from "../core";
import 'flag-icons/css/flag-icons.min.css';

export type CountryFlagProps = React.HtmlHTMLAttributes<HTMLSpanElement> & {
    country: CountryCode,
}

export default function CountryFlag({
    country,
    className,
    ...rest
}: CountryFlagProps): React.ReactElement
{
    let flagClass = `fi fi-${country.toLocaleLowerCase()}`
    return (
        <span 
            className={`${flagClass}${className ? ` ${className}` : ""}`} 
            {...rest}
        />
    )
}