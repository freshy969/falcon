import React from 'react';
import { Box, Radio, H4, Text } from '@deity/falcon-ui';

const Option: React.SFC<{ option: any; disabled?: boolean; onChange: Function }> = ({ option, disabled, onChange }) => (
  <Box mb="sm">
    <H4 mb="sm">{option.label}</H4>
    {option.values.map((value: any) => (
      <Radio
        key={value.valueIndex}
        disabled={disabled}
        mr="xs"
        icon={<div>{value.label}</div>}
        onChange={ev => onChange(ev)}
        name={option.attributeId}
        value={value.valueIndex}
        css={{
          cursor: 'pointer',
          height: 55,
          width: 55
        }}
      />
    ))}
  </Box>
);

export const ProductConfigurableOptions: React.SFC<{ options: any[]; error?: string; onChange: Function }> = ({
  options,
  error,
  onChange
}) => (
  <Box>
    {options.map(option => (
      <Option key={option.id} option={option} onChange={onChange} />
    ))}
    {!!error && <Text color="error">{error}</Text>}
  </Box>
);
ProductConfigurableOptions.defaultProps = {
  options: []
};
