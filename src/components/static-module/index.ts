// WordPress dependencies.
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import { ModuleRegisterDefinition } from '@divi/module-library';

// Local dependencies.
import metadata from './module.json';
import { StaticModuleEdit } from './edit';
import { SettingsContent } from './settings-content';
import { SettingsDesign } from './settings-design';
import { SettingsAdvanced } from './settings-advanced';
import { StaticModuleAttrs } from './types';
import { placeholderContent } from './placeholder-content';

// Styles.
import './style.scss';
import './module.scss';

export const staticModule: ModuleRegisterDefinition<StaticModuleAttrs> = {
  metadata,
  placeholderContent,
  settings: {
    content:  SettingsContent,
    design:   SettingsDesign,
    advanced: SettingsAdvanced,
  },
  renderers: {
    edit: StaticModuleEdit,
  },
};
