import React from "react";
import { CountryCode } from "../core";
import 'flag-icons/css/flag-icons.min.css';

/**
 * The properties for `CountryFlag`
 */
export type CountryFlagProps = React.HtmlHTMLAttributes<HTMLSpanElement> & {
    /**
     * The country code for `CountryFlag`
     */
    country: CountryCode,
}

/**
 * Renders a country flag icon based on the provided country code.
 * @param props - The component props
 * @param props.country - The country code (e.g., 'US', 'FR', 'DE')
 * @param props.className - Optional additional CSS class names to apply to the flag element
 * @param props.rest - Additional HTML span element attributes
 * @returns A React element displaying the country flag icon
 */
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