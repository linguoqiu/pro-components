﻿import type { GenerateStyle, ProAliasToken } from 'orca-pro-utils';
import { useStyle as useAntdStyle } from 'orca-pro-utils';

export interface ProToken extends ProAliasToken {
  componentCls: string;
}

const genProStyle: GenerateStyle<ProToken> = (token) => {
  return {
    [token.componentCls]: {
      width: 'auto',
      '&-title': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '32px',
      },
      '&-overlay': {
        '*': {
          fontFamily: token.fontFamily,
          boxSizing: 'border-box',
        },
        [`${token.antCls}-popover-inner-content`]: {
          width: '200px',
          paddingBlock: 0,
          paddingInline: 0,
          paddingBlockEnd: 8,
        },
        [`${token.antCls}-tree-node-content-wrapper:hover`]: { backgroundColor: 'transparent' },
        [`${token.antCls}-tree-draggable-icon`]: { cursor: 'grab' },
        [`${token.antCls}-tree-treenode`]: {
          alignItems: 'center',
          '&:hover': {
            backgroundColor: token.controlItemBgActive,
            [`${token.componentCls}-list-item-option`]: {
              display: 'block',
            },
          },
          [`${token.antCls}-tree-checkbox`]: {
            insetBlockStart: 0,
            marginBlock: 0,
            marginInline: 0,
            marginInlineEnd: '4px',
          },
        },
      },
    },
    [`${token.componentCls}-list`]: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      paddingBlockStart: 8,
      [`&${token.componentCls}-list-group`]: {
        paddingBlockStart: 0,
      },
      '&-title': {
        marginBlockStart: '6px',
        marginBlockEnd: '6px',
        paddingInlineStart: '24px',
        color: token.colorTextSecondary,
        fontSize: '12px',
      },
      '&-item': {
        display: 'flex',
        alignItems: 'center',
        '&-title': {
          flex: 1,
        },
        '&-option': {
          display: 'none',
          float: 'right',
          cursor: 'pointer',
          '> span': {
            '> span.anticon': {
              color: token.colorPrimary,
            },
          },
          '> span + span': {
            marginInlineStart: 8,
          },
        },
      },
    },
  };
};

export function useStyle(prefixCls: string) {
  return useAntdStyle('CheckCard', (token) => {
    const proToken: ProToken = {
      ...token,
      componentCls: `.${prefixCls}`,
    };

    return [genProStyle(proToken)];
  });
}
