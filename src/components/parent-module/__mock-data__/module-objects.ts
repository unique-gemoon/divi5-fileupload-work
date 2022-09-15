import Immutable from 'seamless-immutable';

import {
  EditPostStoreState,
  MutableEditPostStoreState,
} from '@divi/edit-post';

import { defaultAttributes, customIcon, iconStyle, titleStyle, contentStyle } from './attrs';
import {
  defaultAttributes as childDefaultAttributes,
} from '../../child-module/__mock-data__/attrs';

// Mutable state. NOTE: Update visualization if you change the mutable state structure.
/**
 * State visualization:
 *
 * **** root ****************************************************************************
 * *                                                                                    *
 * *    **** section1 **************************************************************    *
 * *    *                                                                          *    *
 * *    *    **** row1 ********************************************************    *    *
 * *    *    *                                                                *    *    *
 * *    *    *    ** column1 *********************************************    *    *    *
 * *    *    *    *                                                      *    *    *    *
 * *    *    *    *    ** parentModule1 *****************************    *    *    *    *
 * *    *    *    *    *                                            *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *    *           childModule1           *    *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *                                            *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *    *           childModule2           *    *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *                                            *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *    *           childModule3           *    *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *                                            *    *    *    *    *
 * *    *    *    *    **********************************************    *    *    *    *
 * *    *    *    *                                                      *    *    *    *
 * *    *    *    *    ** parentModule2 *****************************    *    *    *    *
 * *    *    *    *    *                                            *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *    *           childModule4           *    *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *                                            *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *    *           childModule5           *    *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *                                            *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *    *           childModule6           *    *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *                                            *    *    *    *    *
 * *    *    *    *    **********************************************    *    *    *    *
 * *    *    *    *                                                      *    *    *    *
 * *    *    *    *    ** parentModule3 *****************************    *    *    *    *
 * *    *    *    *    *                                            *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *    *           childModule7           *    *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *                                            *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *    *           childModule8           *    *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *                                            *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *    *           childModule9           *    *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *                                            *    *    *    *    *
 * *    *    *    *    **********************************************    *    *    *    *
 * *    *    *    *                                                      *    *    *    *
 * *    *    *    *    ** parentModule4 *****************************    *    *    *    *
 * *    *    *    *    *                                            *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *    *           childModule10          *    *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *                                            *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *    *           childModule11          *    *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *                                            *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *    *           childModule12          *    *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *                                            *    *    *    *    *
 * *    *    *    *    **********************************************    *    *    *    *
 * *    *    *    *                                                      *    *    *    *
 * *    *    *    *    ** parentModule5 *****************************    *    *    *    *
 * *    *    *    *    *                                            *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *    *           childModule13          *    *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *                                            *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *    *           childModule14          *    *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *                                            *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *    *           childModule15          *    *    *    *    *    *
 * *    *    *    *    *    ************************************    *    *    *    *    *
 * *    *    *    *    *                                            *    *    *    *    *
 * *    *    *    *    **********************************************    *    *    *    *
 * *    *    *    *                                                      *    *    *    *
 * *    *    *    ********************************************************    *    *    *
 * *    *    *                                                                *    *    *
 * *    *    ******************************************************************    *    *
 * *    *                                                                          *    *
 * *    ****************************************************************************    *
 * *                                                                                    *
 * **************************************************************************************.
 *
 */
export const mutableState: MutableEditPostStoreState = {
  content: {
    root: {
      id:       'root',
      name:     'divi/root',
      children: ['section1'],
      props:    {},
    },
    section1: {
      id:       'section1',
      name:     'divi/section',
      parent:   'root',
      children: ['row1'],
      props:    {},
    },
    row1: {
      id:       'row1',
      name:     'divi/row',
      parent:   'section1',
      children: ['column1'],
      props:    {
        attrs: {
          columnStructure: {
            desktop: {
              value: '4_4',
            },
          },
        },
      },
    },
    column1: {
      id:       'column1',
      name:     'divi/column',
      parent:   'row1',
      children: ['module1'],
      props:    {
        attrs: {
          type: {
            desktop: {
              value: '4_4',
            },
          },
        },
      },
    },
    parentModule1: {
      id:     'parentModule1',
      name:   'divi/parent-module',
      parent: 'column1',
      props:  {
        attrs: defaultAttributes,
      },
      children: [
        'childModule1',
        'childModule2',
        'childModule3',
      ],
    },
    childModule1: {
      id:     'childModule1',
      name:   'divi/child-module',
      parent: 'parentModule1',
      props:  {
        attrs: childDefaultAttributes,
      },
      children: [],
    },
    childModule2: {
      id:     'childModule2',
      name:   'divi/child-module',
      parent: 'parentModule1',
      props:  {
        attrs: childDefaultAttributes,
      },
      children: [],
    },
    childModule3: {
      id:     'childModule3',
      name:   'divi/child-module',
      parent: 'parentModule1',
      props:  {
        attrs: childDefaultAttributes,
      },
      children: [],
    },
    parentModule2: {
      id:     'parentModule2',
      name:   'divi/parent-module',
      parent: 'column1',
      props:  {
        attrs: customIcon,
      },
      children: [
        'childModule4',
        'childModule5',
        'childModule6',
      ],
    },
    childModule4: {
      id:     'childModule4',
      name:   'divi/child-module',
      parent: 'parentModule2',
      props:  {
        attrs: childDefaultAttributes,
      },
      children: [],
    },
    childModule5: {
      id:     'childModule5',
      name:   'divi/child-module',
      parent: 'parentModule2',
      props:  {
        attrs: childDefaultAttributes,
      },
      children: [],
    },
    childModule6: {
      id:     'childModule6',
      name:   'divi/child-module',
      parent: 'parentModule2',
      props:  {
        attrs: childDefaultAttributes,
      },
      children: [],
    },
    parentModule3: {
      id:     'parentModule3',
      name:   'divi/parent-module',
      parent: 'column1',
      props:  {
        attrs: iconStyle,
      },
      children: [
        'childModule7',
        'childModule8',
        'childModule9',
      ],
    },
    childModule7: {
      id:     'childModule7',
      name:   'divi/child-module',
      parent: 'parentModule3',
      props:  {
        attrs: childDefaultAttributes,
      },
      children: [],
    },
    childModule8: {
      id:     'childModule8',
      name:   'divi/child-module',
      parent: 'parentModule3',
      props:  {
        attrs: childDefaultAttributes,
      },
      children: [],
    },
    childModule9: {
      id:     'childModule9',
      name:   'divi/child-module',
      parent: 'parentModule3',
      props:  {
        attrs: childDefaultAttributes,
      },
      children: [],
    },
    parentModule4: {
      id:     'parentModule4',
      name:   'divi/parent-module',
      parent: 'column1',
      props:  {
        attrs: titleStyle,
      },
      children: [
        'childModule10',
        'childModule11',
        'childModule12',
      ],
    },
    childModule10: {
      id:     'childModule10',
      name:   'divi/child-module',
      parent: 'parentModule4',
      props:  {
        attrs: childDefaultAttributes,
      },
      children: [],
    },
    childModule11: {
      id:     'childModule11',
      name:   'divi/child-module',
      parent: 'parentModule4',
      props:  {
        attrs: childDefaultAttributes,
      },
      children: [],
    },
    childModule12: {
      id:     'childModule12',
      name:   'divi/child-module',
      parent: 'parentModule4',
      props:  {
        attrs: childDefaultAttributes,
      },
      children: [],
    },
    parentModule5: {
      id:     'parentModule5',
      name:   'divi/parent-module',
      parent: 'column1',
      props:  {
        attrs: contentStyle,
      },
      children: [
        'childModule13',
        'childModule14',
        'childModule15',
      ],
    },
    childModule13: {
      id:     'childModule13',
      name:   'divi/child-module',
      parent: 'parentModule5',
      props:  {
        attrs: childDefaultAttributes,
      },
      children: [],
    },
    childModule14: {
      id:     'childModule14',
      name:   'divi/child-module',
      parent: 'parentModule5',
      props:  {
        attrs: childDefaultAttributes,
      },
      children: [],
    },
    childModule15: {
      id:     'childModule15',
      name:   'divi/child-module',
      parent: 'parentModule5',
      props:  {
        attrs: childDefaultAttributes,
      },
      children: [],
    },
  },
};

export const state: EditPostStoreState = Immutable(mutableState);