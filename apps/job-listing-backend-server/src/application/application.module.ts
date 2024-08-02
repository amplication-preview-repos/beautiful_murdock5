import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ApplicationModuleBase } from "./base/application.module.base";
import { ApplicationService } from "./application.service";
import { ApplicationController } from "./application.controller";
import { ApplicationResolver } from "./application.resolver";

@Module({
  imports: [ApplicationModuleBase, forwardRef(() => AuthModule)],
  controllers: [ApplicationController],
  providers: [ApplicationService, ApplicationResolver],
  exports: [ApplicationService],
})
export class ApplicationModule {}
