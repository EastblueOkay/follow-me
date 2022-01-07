import { ThemeProvider } from 'react-jss'
import type { Props } from './type'
import Modal from './modal'
import Header from './header'
import mergeTheme from './utils/theme-merge'
import { Provider as I18nProvider } from './i18n'

const Comp = () => (
  <Modal visible>
    <Header />
  </Modal>
)

export default ({ theme, locale = 'en-US' }: Props) => (
  <ThemeProvider theme={mergeTheme(theme)}>
    <I18nProvider value={{ locale }}>
      <Comp />
    </I18nProvider>
  </ThemeProvider>
)
