// Copyright 2017-2025 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { OverrideBundleDefinition } from '@polkadot/types/types';

// Kora Chain specific type definitions
const definitions: OverrideBundleDefinition = {
  types: [
    {
      // on all versions
      minmax: [0, undefined],
      types: {
        // Standard Substrate AccountId - Kora uses default substrate account types
        Address: 'MultiAddress',
        LookupSource: 'MultiAddress'
        // Additional Kora-specific types can be added here as the chain evolves
      }
    }
  ]
};

export default definitions;
