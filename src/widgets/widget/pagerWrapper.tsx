import { useCallback, useEffect, useState } from "react";

import Pager from "@jetbrains/ring-ui-built/components/pager/pager";

import { readProjectsIds } from "src/utils/projects";
import { Project } from "src/types/youtrackApi";
import { updatePageSize } from "src/utils/pager";

type ProjectsListProps = {
  projects: Project[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pageSize: number;
  setPageSize: (size: number) => void;
};

export const PagerWrapper = ({
  projects,
  currentPage,
  setCurrentPage,
  pageSize,
  setPageSize,
}: ProjectsListProps) => {
  const [total, setTotal] = useState<number>(0);

  const handlePageSizeChange = useCallback(
    async (size: number) => {
      const success = await updatePageSize(size);
      if (!success) {
        return;
      }

      setPageSize(size);
    },
    [setPageSize]
  );

  useEffect(() => {
    const loadTotal = async () => {
      const projectIds = await readProjectsIds();
      setTotal(projectIds.length);
    };

    loadTotal();
  }, [projects]);

  return (
    <Pager
      total={total}
      currentPage={currentPage}
      pageSize={pageSize}
      pageSizes={[3, 5, 10]}
      onPageChange={(currentPage) => setCurrentPage(currentPage)}
      onPageSizeChange={(size) => handlePageSizeChange(size)}
    />
  );
};
