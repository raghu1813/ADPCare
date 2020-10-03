import { HealthInfo } from './HealthInfo';

export interface User{
    id: number;
    username: string;
    roles?: string[];
    healthInfo: HealthInfo;
}