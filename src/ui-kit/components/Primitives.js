// Example uses styled-components, but styled-system works with most other css-in-js libraries as well
import styled from "styled-components";
import { space, layout, typography, color, flexbox } from "styled-system";

// Add styled-system functions to your component
export const Box = styled.div`
  ${space}
  ${layout}
  ${typography}
  ${color}
`;

export const Flex = styled(Box)`
  ${flexbox}
`;
