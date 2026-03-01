import React from "react";
import { CountryCode } from "../core";
import 'flag-icons/css/flag-icons.min.css';

export type CountryFlagProps = {
    country: CountryCode,
}

export default function CountryFlag({
    country,
}: CountryFlagProps): React.ReactElement
{
    let className = `fi fi-${country.toLocaleLowerCase()}`
    return (
        <span className={className}></span>
    )
}