import { AuthService } from './auth.service';
export declare class RegisterDTO {
    email: string;
    name: string;
    password: string;
    repeatPassword: string;
}
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(dto: RegisterDTO): Promise<{
        statusCode: number;
        message: string;
        data: {
            id: number;
            email: string;
            name: string;
            password: string;
        };
    }>;
}
