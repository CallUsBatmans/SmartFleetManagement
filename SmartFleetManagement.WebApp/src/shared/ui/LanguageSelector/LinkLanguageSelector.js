import React from 'react';
import DiscreteLink from '../DiscreteLink/DiscreteLink';
import styles from './linkLanguageSelector.module.scss';
import { useTranslation } from 'react-i18next';
import { translations } from '../../../internationalization';
import { Popup } from 'semantic-ui-react';

const LinkLanguageSelector = props => {
  const { i18n } = useTranslation();

  const languages = (
    <>
      {Object.keys(translations).map(key => translations[key]).map(language => (
        <Popup
          content={language.name}
          key={language.code}
          trigger={
            <li>
              <DiscreteLink text={language.code.toUpperCase()} onClick={() => i18n.changeLanguage(language.code)} />
            </li>
          }
        />
      ))}
    </>
  );

  return (
    <ul className={styles.languageSelector}>
      {languages}
    </ul>
  );
};

export default LinkLanguageSelector;
