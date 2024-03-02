import { Profile } from "./profile.module";
import { ERole } from "./role";

export class User {
    id: number;
    email: string;
    username: string;
    password: string;
    roles: [ERole];
    profile:Profile
    verificationCode: string;
    enabled: boolean;
    active: boolean;
   // establishmentId: number
}
