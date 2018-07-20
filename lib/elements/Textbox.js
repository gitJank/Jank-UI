import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as colors from '../styles/colors';

const textboxSizes = {
    small: {
        'width': '160px'
        },
    medium: {
        'width': '240px'
        },
    large: {
        'width': '400px'
        }
};

const Textbox = styled.input.attrs({
    type: 'text',
    
})`
  display: inline-block;
  border-radius: 3px;
  width: ${({ size }) => textboxSizes[size]['width']};
  color: ${({ color }) => colors[color]};
`;

Textbox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
};
Textbox.defaultProps = {
  color: 'black',
  size: 'medium'
};
export default Textbox;