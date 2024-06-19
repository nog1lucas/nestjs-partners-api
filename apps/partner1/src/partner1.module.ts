import { PrismaModule } from '@app/core/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../../../libs/core/src/auth/auth.module';
import { EventsModule } from './events/events.module';
import { SpotsModule } from './spots/spots.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env.partern1', isGlobal: true }),
    PrismaModule,
    AuthModule,
    EventsModule,
    SpotsModule,
  ],
})
export class Partner1Module {}
