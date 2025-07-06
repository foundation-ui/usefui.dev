import styled from "styled-components";

export const DisplayXxl = styled.h1`
  font-size: clamp(var(--fontsize-large-60), 8vw, var(--fontsize-large-90));
  letter-spacing: -0.06em;
  line-height: 1;
  font-weight: 500;
`;
export const DisplayXl = styled.h1`
  font-size: clamp(var(--fontsize-large-30), 5vw, var(--fontsize-large-50));
  letter-spacing: -0.05em;
  line-height: 0.95;
  font-weight: 500;
`;
export const DisplayMd = styled.h3`
  font-size: clamp(var(--fontsize-large-10), 5vw, var(--fontsize-large-20));
  letter-spacing: -0.05em;
  line-height: 1;
  font-weight: 500;
`;
export const DisplaySmall = styled.span`
  font-size: clamp(var(--fontsize-medium-20), 5vw, var(--fontsize-medium-40));
  max-width: var(--breakpoint-tablet);
  letter-spacing: -0.03em;
  font-weight: 500;
`;

export const TextMuted = styled.span`
  user-select: none;
  pointer-events: none;
`;

export const TextLimiter = styled.div`
  width: 100%;
  max-width: var(--measurement-large-90);

  * {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
