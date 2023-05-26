import { LinkToMenu } from './CompanyName.styled';

export const CompanyName = ({ name, nav }) => {
  return <LinkToMenu to={nav}>{name}</LinkToMenu>;
};
