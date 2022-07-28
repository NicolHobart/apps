// Copyright 2017-2022 @polkadot/app-alliance authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useRef } from 'react';
import { Route, Switch } from 'react-router';

import { Tabs } from '@polkadot/react-components';

import Overview from './Overview';
import { useTranslation } from './translate';
import Unscrupelous from './Unscrupelous';
import useUnscrupelous from './useUnscrupelous';

interface Props {
  basePath: string;
  className?: string;
}

function AllianceApp ({ basePath, className }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const unscrupelous = useUnscrupelous();

  const itemsRef = useRef([
    {
      isRoot: true,
      name: 'overview',
      text: t<string>('Overview')
    },
    {
      name: 'unscrupelous',
      text: t<string>('Unscrupelous')
    }
  ]);

  return (
    <main className={className}>
      <Tabs
        basePath={basePath}
        items={itemsRef.current}
      />
      <Switch>
        <Route path={`${basePath}/unscrupelous`}>
          <Unscrupelous unscrupelous={unscrupelous} />
        </Route>
        <Route>
          <Overview unscrupelous={unscrupelous} />
        </Route>
      </Switch>
    </main>
  );
}

export default React.memo(AllianceApp);