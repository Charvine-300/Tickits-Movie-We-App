import { RoleConfigItemType } from "./role.config.type";

export type SidebarConfig = {
    companyName: string;
    companyLogo: string;
    role?: RoleConfigItemType[]
}