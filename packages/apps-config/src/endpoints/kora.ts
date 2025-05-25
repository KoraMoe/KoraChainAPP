// Copyright 2017-2025 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

import { chainsKoraLogoPNG } from '../ui/logos/chains/index.js';

// The available Kora network endpoints
// IMPORTANT: Alphabetical based on text
export const koraChains: Omit<EndpointOption, 'teleport'>[] = [
  {
    homepage: 'https://koranet.work',
    info: 'kora-chanto',
    providers: {
      'Kora Lab': 'wss://chanto-rpc.koranet.work'
    },
    summary: 'The first testnet of Kora Network - a Substrate-based blockchain',
    text: 'Kora Chanto Testnet',
    ui: {
      color: '#D5635B', // Kora brand color: rgb(213, 99, 91)
      logo: chainsKoraLogoPNG as string
    }
  }
];
