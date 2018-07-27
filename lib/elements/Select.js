
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as colors from '../styles/colors';

const selectSizes = {
    small: {
        'width': '100px'
        },
    medium: {
        'width': '200px'
        },
    large: {
        'width': '300px'
        }
};

const Select = styled.select`
  display: inline-block;
  margin: 8px 0;
  background-color: ${({ bgColor }) => colors[bgColor]};
  width: ${({ size }) => selectSizes[size]['width']};
`;

Select.propTypes = {
  size: PropTypes.string,
  bgColor: PropTypes.string
};

Select.defaultProps = {
    size: 'large',
    bgColor: colors.blue
  };

export default Select;