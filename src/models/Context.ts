import { Context as BaseContext } from 'grammy'
import { I18nContext } from '@grammyjs/i18n/dist/source'
import { User } from '@/models/User'

class Context extends BaseContext {
  readonly i18n!: I18nContext
  dbuser!: User

  replyWithLocalization: this['reply'] = (text, other, ...rest) => {
    text = this.i18n.t(text)
    return this.reply(text, other, ...rest)
  }
}

export default Context
