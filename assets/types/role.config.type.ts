export type RoleConfigType = {
  [key: string]: RoleConfigItemType[];
};


export type RoleConfigItemType = {
  name: string;
  path: string;
  icon: React.FC;
  color: string;
  fontColor?: string;
  description?: string;
  subRoutes?: RoleConfigItemType[];
};