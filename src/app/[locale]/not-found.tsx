import NotFoundIndex from '@/components/layouts/NotFound'
import BaseLayout from "@/components/layouts";
import { routing } from '@/i18n/routing';

export default function GlobalNotFound() {
  return (
    <BaseLayout locale={routing.defaultLocale}>
      <NotFoundIndex />
    </BaseLayout>
  );
}
