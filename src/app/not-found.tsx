import NotFoundIndex from "@/components/layouts/NotFound";
import { routing } from "../i18n/routing";
import BaseLayout from "@/components/layouts";

export default function GlobalNotFound() {
  return (
    <BaseLayout locale={routing.defaultLocale}>
      <NotFoundIndex />
    </BaseLayout>
  );
}

