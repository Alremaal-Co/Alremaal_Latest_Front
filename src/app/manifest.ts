import { Languages } from '@/core/enum/general';
import {MetadataRoute} from 'next';
import {getTranslations} from 'next-intl/server';

export default async function manifest(): Promise<MetadataRoute.Manifest> {;
  const t = await getTranslations({locale: Languages.ARABIC});

  return {
    name: t('AlRemalRealeState'),
    start_url: '/',
    // theme_color: '#101E33'
  };
}
