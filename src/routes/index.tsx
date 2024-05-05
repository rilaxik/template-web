import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

export const Route = createFileRoute('/')({
  component: Index
})

function Index() {
  const { t } = useTranslation('index')
  return (
    <>
      <div
        className={
          'flex flex-1 items-center justify-center self-stretch text-4xl font-semibold'
        }>
        {t('hello')}
      </div>
    </>
  )
}
