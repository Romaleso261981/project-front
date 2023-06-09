import styled from "styled-components";

export const BtnElement = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 116px;
  min-height: 44px;
  font-family: inherit;
  font-style: normal;
  font-weight: ${(props) => (props.status === "google" ? "500" : "700")};
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-transform: ${(props) =>
    props.status === "google" ? "none" : "uppercase"};
  transition: 350ms ease-in-out;
  color: ${(props) =>
    props.status === "google" ? "#000000" : props.theme.colors.TextGray};
  background-color: ${(p) => p.theme.colors.PrimaryGray};
  padding: ${(props) =>
    props.status === "google" ? "10px 16px" : "12px 14px"};
  border-radius: ${(props) => (props.status === "google" ? "26px" : "16px")};
  border: 2px solid ${(props) => props.theme.colors.btnsBorder};
  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));
  cursor: pointer;

  &:hover,
  &:focus {
    color: white;
    background-color: ${(p) => p.theme.colors.PrimaryOrange};
    filter: drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35));
  }

  &:active {
    background-color: ${(p) => p.theme.colors.PrimaryOrange};
    color: white;
    filter: drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35));
  }

  & > svg {
    margin-right: 10px;
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 768px) {
    min-width: 122px;
  }
`;

export const BtnText = styled.span``;
