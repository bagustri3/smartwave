import createMiddleware from "next-intl/middleware";
import { locales } from "./i18n/config";

export default createMiddleware({
    locales,
    defaultLocale: "id",
});

export const config = {
    matcher: ["/", "/(id|en)/:path*"],
};
