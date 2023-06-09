// External dependencies.
import React, { ReactElement } from 'react';

// Divi dependencies.
import {
  Attributes,
  Css,
  IdClasses,
  PositionGroup,
  Scroll,
  Transition,
  Visibility,
} from '@divi/module';
import { cssFields } from './custom-css';

export const SettingsAdvanced = (): ReactElement => (
  <React.Fragment>
    <IdClasses />
    <Css
      mainSelector=".et_pb_child_module"
      cssFields={cssFields}
    />
    <Attributes />
    <Visibility />
    <Transition />
    <PositionGroup />
    <Scroll />
  </React.Fragment>
);
