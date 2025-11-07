import { useCallback, useState } from "react";

import ContentLayout from "@jetbrains/ring-ui-built/components/content-layout/content-layout.js";

import { usePolling } from "src/hooks/usePolling";
import { Project } from "src/types/youtrackApi";
import { ProjectsActions } from "src/widgets/widget/projectsActions";
import { ProjectsList } from "src/widgets/widget/projectsList";
import { readProjects } from "src/utils/projects";
import { readPageSize } from "src/utils/pager";

export const App = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number | null>(null);

  const DEFAULT_PAGE_SIZE = 5;

  const loadPageSize = useCallback(async () => {
    const storedPageSize = await readPageSize();
    setPageSize(storedPageSize ?? DEFAULT_PAGE_SIZE);
  }, []);

  const loadProjects = useCallback(async () => {
    if (!pageSize) {
      return;
    }
    const projects = await readProjects((currentPage - 1) * pageSize, pageSize);
    setProjects(projects);
  }, [currentPage, pageSize]);

  // If it is not needed to verify the value with the backend
  // useEffect(() => {
  //   loadPageSize();
  // }, [loadPageSize]);
  // or
  usePolling(loadPageSize);

  usePolling(loadProjects, { enabled: Boolean(pageSize) });

  return (
    <div className="widget">
      <ContentLayout contentClassName="contentWrapper">
        <ProjectsActions onProjectsChanged={loadProjects} />
        {pageSize && (
          <ProjectsList
            projects={projects}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            pageSize={pageSize}
            setPageSize={setPageSize}
          />
        )}
      </ContentLayout>
    </div>
  );
};
