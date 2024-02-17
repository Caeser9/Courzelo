import { ERole } from "./role";

export class User {
    id: number;
    email: string;
    username: string;
    password: string;
    roles: [ERole];
}
