import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class RoleGuard implements CanActivate {

  canActivate(route: any): boolean {
    const allowedRoles = route.data.roles;
    const role = JSON.parse(atob(localStorage.getItem('admin_token')!.split('.')[1])).role;
    return allowedRoles.includes(role);
  }
}
