import { Injectable, CanActivate, ExecutionContext, SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRoleEnumType } from '../entity/role.entity';

export const Roles = (...roles: UserRoleEnumType[]) => SetMetadata('roles', roles);

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    console.log('ROLES GUARD RUNNING');

    const requiredRoles = this.reflector.getAllAndOverride<UserRoleEnumType[]>(
      'roles',
      [context.getHandler(), context.getClass()]
    );
    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    if (!request.user) {
      return false;
    }
    return requiredRoles.some((role) => role === request.user?.role?.name);
  }
}
