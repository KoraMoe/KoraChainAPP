// Copyright 2017-2025 @polkadot/apps-routing authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Route, TFunction } from './types.js';

import Component from '@polkadot/app-addresses';

export default function create (t: TFunction): Route {
  return {
    Component,
    display: {
      needsApi: []
    },
    group: 'accounts',
    icon: 'address-card',
    name: 'addresses',
    text: t('nav.addresses', 'Address book', { ns: 'apps-routing' })
  };
}
