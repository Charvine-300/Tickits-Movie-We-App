import { SidebarConfig } from '@types';
import React from 'react';
import { ButtonProps } from './components.type';
import { RouteInterface } from './routes.type';

export interface SidebarProps {
  config: SidebarConfig;
}

export interface SidebarItemProps extends ButtonProps {
  active?: boolean;
  title?: string;
}

export type BuildSideBarItemsProps = {
  config: SidebarConfig;
};

export type TabContextType = {
  activeTab: number | string;
  setActiveTab: React.Dispatch<React.SetStateAction<number | string>>;
};

export type TabItemProps = {
  id: number | string;
  active?: boolean;
};

export type TabHeaderItemButtonType = {
  active: boolean;
};

export type RouterProps = {
  routes: RouteInterface[];
  base?: string;
};

export type WithChildren<T = Record<string, unknown>> = T & {
  children?: React.ReactNode;
};
export type SuggestionCompProps = WithChildren<{
  onClick: () => void;
  showSuggestion: boolean;
}>;

export type DropDownData = {
  label: string;
  icon:  string;
  data?: unknown;
  color?: string;
  onClick?: (d?: unknown) => void;
};

export type NavMenuItem = {
  label: string;
  icon: React.FC;
  to: string;
};

export type NavMenuData = {
  label: string;
  items: NavMenuItem[];
};

export type NavMenuConfig = {
  type: 'layout' | 'component' | 'menu'| "menu2";
  layoutType?: 'row' | 'column';
  width?: string;
  component?: JSX.Element;
  menu?: NavMenuData;
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  toColumn?: boolean;
  gap?: number;
  children?: Array<NavMenuConfig>;
};
