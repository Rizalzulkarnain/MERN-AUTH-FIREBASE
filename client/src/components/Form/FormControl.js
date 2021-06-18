import React from 'react';
import { Text, Box, FormContainer, InputDark } from '../../styles';

const FormControl = ({ ...formControl }) => {
  return (
    <Box>
      <FormContainer>
        <div>
          <Box>
            <label htmlFor={formControl.name}>
              <Text fontSize={2} fontWeight={3}>
                {formControl.label}:
              </Text>
            </label>
          </Box>

          <Box mt={2}>
            <InputDark
              id={formControl.name}
              name={formControl.name}
              value={formControl.value}
              type={formControl.type}
              onChange={formControl.onChange}
              placeholder={formControl.placeholder}
            />
          </Box>
        </div>
      </FormContainer>
    </Box>
  );
};

export default FormControl;
