﻿import { PlusOutlined } from '@ant-design/icons';
import { useIntl } from 'orca-pro-provider';
import { nanoid, runFunction } from 'orca-pro-utils';
import { Button } from 'antd';
import omit from 'omit.js';
import { useMemo, useRef, useState } from 'react';
import type { ProFormListItemProps } from './ListItem';
import { ProFormListItem } from './ListItem';

const ProFormListContainer: React.FC<ProFormListItemProps> = (props) => {
  const intl = useIntl();
  const {
    creatorButtonProps,
    prefixCls,
    children,
    creatorRecord,
    action,
    fields,
    actionGuard,
    max,
    fieldExtraRender,
    meta,
  } = props;
  const fieldKeyMap = useRef(new Map<string, string>());
  const [loading, setLoading] = useState(false);

  const uuidFields = useMemo(() => {
    return fields.map((field) => {
      if (!fieldKeyMap.current?.has(field.key.toString())) {
        fieldKeyMap.current?.set(field.key.toString(), nanoid());
      }
      const uuid = fieldKeyMap.current?.get(field.key.toString());
      return {
        ...field,
        uuid,
      };
    });
  }, [fields]);

  /**
   * 根据行为守卫包装action函数
   */
  const wrapperAction = useMemo(() => {
    const wrapAction = { ...action };
    const count = uuidFields.length;

    if (actionGuard?.beforeAddRow) {
      wrapAction.add = async (...rest) => {
        const success = await actionGuard.beforeAddRow!(...rest, count);
        if (success) {
          return action.add(...rest);
        }
        return false;
      };
    }

    if (actionGuard?.beforeRemoveRow) {
      wrapAction.remove = async (...rest) => {
        const success = await actionGuard.beforeRemoveRow!(...rest, count);
        if (success) {
          return action.remove(...rest);
        }
        return false;
      };
    }

    return wrapAction;
  }, [action, actionGuard, uuidFields]);

  const creatorButton = useMemo(() => {
    if (creatorButtonProps === false || uuidFields.length === max) return null;
    const {
      position = 'bottom',
      creatorButtonText = intl.getMessage('editableTable.action.add', '添加一行数据'),
    } = creatorButtonProps || {};
    return (
      <Button
        className={`${prefixCls}-creator-button-${position}`}
        type="dashed"
        loading={loading}
        block
        icon={<PlusOutlined />}
        {...omit(creatorButtonProps || {}, ['position', 'creatorButtonText'])}
        onClick={async () => {
          setLoading(true);
          // 如果不是从顶部开始添加，则插入的索引为当前行数
          let index = uuidFields.length;
          // 如果是顶部，加到第一个，如果不是，为空就是最后一个
          if (position === 'top') index = 0;
          await wrapperAction.add(runFunction(creatorRecord) || {}, index);
          setLoading(false);
        }}
      >
        {creatorButtonText}
      </Button>
    );
  }, [
    creatorButtonProps,
    uuidFields.length,
    max,
    intl,
    prefixCls,
    loading,
    wrapperAction,
    creatorRecord,
  ]);

  return (
    <div
      style={{
        width: 'max-content',
        maxWidth: '100%',
        minWidth: '100%',
      }}
    >
      {creatorButtonProps !== false && creatorButtonProps?.position === 'top' && creatorButton}
      {uuidFields.map((field, index) => {
        return (
          <ProFormListItem
            {...props}
            key={field.uuid}
            field={field}
            index={index}
            action={wrapperAction}
            count={uuidFields.length}
          >
            {children}
          </ProFormListItem>
        );
      })}
      {fieldExtraRender && fieldExtraRender(wrapperAction, meta)}
      {creatorButtonProps !== false && creatorButtonProps?.position !== 'top' && creatorButton}
    </div>
  );
};

export { ProFormListContainer };
