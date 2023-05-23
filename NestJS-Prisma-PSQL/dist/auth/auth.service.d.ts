import { ConfigService } from '@nestjs/config';
import { RegisterDTO } from './auth.controller';
import { PrismaService } from '../prisma/prisma.service';
export declare class AuthService {
    private prisma;
    private config;
    constructor(prisma: PrismaService, config: ConfigService);
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
