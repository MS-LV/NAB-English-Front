import { Injectable } from '@angular/core';
import { Router, Route, Routes } from '@angular/router';
import { RoutesPath } from '@/app.interface';

@Injectable()
export class StudentService {
  constructor(private router: Router) { }

  routerLinks() {
    const studentPaths: Route | undefined = this.router.config.find(
      (path: Route) => path.path === 'student'
    );
    const studentChildren = this.compareLinks(studentPaths);

    const routes = <RoutesPath[]>(<RoutesPath[]>studentChildren).map(
      ({ title, path, data }) => ({
        title,
        path,
        data,
      })
    );
    return routes;
  }

  private compareLinks(routes: Route | undefined): Routes {
    if (!routes) {
      return [];
    }
    const cloneRoutes = routes.children!.slice(0);
    const filterRoutes = cloneRoutes.filter((route: Route) => {
      return !route.redirectTo;
    });
    return filterRoutes;
  }
}
