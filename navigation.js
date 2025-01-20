import { createNavigation } from "next-intl/navigation";
import { pathnames, locales, localePrefix } from "./i18n/config";

export const { Link, getPathname, redirect, usePathname, useRouter } =
    createNavigation({
        locales,
        pathnames,
        localePrefix,
    });
