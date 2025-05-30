// Copyright 2017-2025 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useCallback } from 'react';

import AddressToggle from '../AddressToggle.js';

interface Props {
  address: string;
  filter?: string;
  isHidden?: boolean;
  onDeselect: (address: string) => void;
}

function Selected ({ address, filter, isHidden, onDeselect }: Props): React.ReactElement<Props> | null {
  const onChange = useCallback(
    () => onDeselect(address),
    [address, onDeselect]
  );

  if (isHidden) {
    return null;
  }

  return (
    <AddressToggle
      address={address}
      filter={filter}
      noToggle
      onChange={onChange}
    />
  );
}

export default React.memo(Selected);
