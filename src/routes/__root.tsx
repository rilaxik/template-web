import {
  createRootRoute,
  Link,
  Outlet,
  useRouterState
} from '@tanstack/react-router'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

export const Route = createRootRoute({
  component: PageWrapper,
  notFoundComponent: NotFound
})

export default function PageWrapper() {
  const { t } = useTranslation('common')
  const {
    location: { pathname }
  } = useRouterState()

  return (
    <main
      className={
        'dark flex h-svh w-full flex-col items-center justify-start gap-4 overflow-x-hidden px-16 py-4'
      }>
      <Helmet>
        <title>{t(`title.${pathname}`)}</title>
      </Helmet>
      <header
        className={
          'flex min-h-12 w-[1200px] flex-row items-center justify-between rounded bg-neutral-800 px-4 py-2'
        }>
        <Link to={'/'} className={'flex cursor-pointer font-bold'}>
          {t('header.title')}
        </Link>
      </header>
      <Outlet />
    </main>
  )
}

export function NotFound() {
  const { t } = useTranslation('common')

  return (
    <>
      <Helmet>
        <title>{t('title.notFound')}</title>
      </Helmet>
      <section
        className={
          'flex flex-1 flex-col items-center justify-center gap-2 self-stretch'
        }>
        <div className={'flex text-2xl'}>Page not found</div>
        <div className={'text flex opacity-50'}>
          Page you are looking for does not exist
        </div>
      </section>
    </>
  )
}
