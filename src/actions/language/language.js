import { updateIntl } from 'react-intl-redux';
import { normalizeLanguageName } from '@plone/volto/helpers';
import Cookies from 'universal-cookie';
import config from '@plone/volto/registry';

export function changeLanguageCookies(language, req) {
  const cookies = new Cookies();
  const cookieOptions = {
    expires: new Date(
      new Date().getTime() + config.settings.cookieExpires * 1000,
    ),
    path: '/',
  };

  if (!req) {
    cookies.set(
      'I18N_LANGUAGE',
      normalizeLanguageName(language) || '',
      cookieOptions,
    );
  } else {
    req.universalCookies.set(
      'I18N_LANGUAGE',
      normalizeLanguageName(language) || '',
      cookieOptions,
    );
  }
}

/**
 * Changes current language using react-intl-redux action and setting the cookie
 * @function changeLanguage
 * @param {string} language target language.
 * @param {number} locale set of locales corresponding the target language.
 * @returns {Object} Change the target language action.
 */
export function changeLanguage(language, locale, req) {
  changeLanguageCookies(language, req);

  return updateIntl({
    locale: language,
    messages: locale,
  });
}
