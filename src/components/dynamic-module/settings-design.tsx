// External dependencies.
import React, { ReactElement } from 'react';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';

// Divi dependencies.
import {
  Animation,
  Border,
  BoxShadow,
  Filters,
  Font,
  FontBodyGroup,
  Sizing,
  Spacing,
  Text,
  Transform,
} from '@divi/module';
import { defaultSettingsAttrs } from './constants';


export const SettingsDesign = (): ReactElement => (
  <React.Fragment>
    <Text />
    <Font
      groupLabel={__('Title Text', 'd5-extension-example-modules')}
      attrName="titleFont"
      fieldLabel={__('Title', 'd5-extension-example-modules')}
      hideElements={{
        headingLevel: false,
      }}
      defaultGroupAttr={defaultSettingsAttrs?.titleFont}
    />
    <Font
      groupLabel={__('Post Title Text', 'd5-extension-example-modules')}
      attrName="postTitleFont"
      fieldLabel={__('Post Title', 'd5-extension-example-modules')}
      hideElements={{
        headingLevel: false,
      }}
      defaultGroupAttr={defaultSettingsAttrs?.postTitleFont}
    />
    <FontBodyGroup />
    <Sizing />
    <Spacing />
    <Border />
    <BoxShadow />
    <Filters />
    <Transform />
    <Animation />
  </React.Fragment>
);
