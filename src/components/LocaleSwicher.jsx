'use client';

import {useLocale, useTranslations} from 'next-intl';
import {usePathname, useRouter} from 'next-intl/client';
import {useTransition} from 'react';

export default function LocaleSwitcher() {

  const t = useTranslations('LocaleSwitcher');
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale});
    });
  }
  return (
    <>
    <select
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {['en', 'es'].map((cur) => (
          <option key={cur} value={cur}>
            {t('locale', {locale: cur})}
          </option>
        ))}
      </select>
    </>
  )
}