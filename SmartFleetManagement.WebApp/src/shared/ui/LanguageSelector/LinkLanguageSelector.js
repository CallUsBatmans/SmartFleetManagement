import React from 'react';
import DiscreteLink from '../DiscreteLink/DiscreteLink';
import styles from './linkLanguageSelector.module.scss';
import { useTranslation } from 'react-i18next';
import { translations } from '../../../internationalization';
import Tooltip from '../Tooltip/Tooltip';


const LinkLanguageSelector = props => {
  const { i18n } = useTranslation();

  const languages = (
    <>
      {Object.keys(translations).map((key) => translations[key]).map((language, index) => (
        <Tooltip
          content={language.name}
          key={index}
        >
          <li key={index}>
            <DiscreteLink text={language.code.toUpperCase()} onClick={() => i18n.changeLanguage(language.code)} />
          </li>
        </Tooltip>
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
