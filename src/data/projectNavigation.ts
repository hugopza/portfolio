import { projects } from "./portfolio";

export interface ProjectNavigationTarget {
  href: string;
  title: string;
  index: string;
  disciplines: string;
  isReturn: boolean;
}

export function getProjectNavigationTarget(currentHref: string): ProjectNavigationTarget {
  const currentIndex = projects.findIndex((project) => project.href === currentHref);
  const nextProject = currentIndex >= 0 ? projects[currentIndex + 1] : undefined;

  if (nextProject) {
    return {
      href: nextProject.href,
      title: nextProject.name,
      index: nextProject.index,
      disciplines: nextProject.disciplines,
      isReturn: false,
    };
  }

  return {
    href: "/#work",
    title: "All Projects",
    index: "Project Index",
    disciplines: "Back to portfolio",
    isReturn: true,
  };
}
