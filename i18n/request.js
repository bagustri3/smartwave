import { getRequestConfig } from "next-intl/server";
import { locales } from "./config";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ requestLocale }) => {
    // Provide a static locale, fetch a user setting,
    // read from `cookies()`, `headers()`, etc.
    const locale = await requestLocale;
    if (!locales.includes(locale0)) notFound();

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default,
    };
});
