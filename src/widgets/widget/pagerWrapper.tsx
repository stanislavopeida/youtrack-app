import { Dispatch, SetStateAction, useCallback, useState } from "react";

import Pager from "@jetbrains/ring-ui-built/components/pager/pager";

import { readProjectsIds } from "src/utils/projects";
import { Project } from "src/types/youtrackApi";
import { updatePageSize } from "src/utils/pager";
import { usePolling } from "src/hooks/usePolling";

type PagerWrapperProps = {
  projects: Project[];
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  pageSize: number;
  setPageSize: Dispatch<SetStateAction<number | null>>;
};

export const PagerWrapper = ({
  projects,
  currentPage,
  setCurrentPage,
  pageSize,
  setPageSize,
}: PagerWrapperProps) => {
  const [total, setTotal] = useState<number>(0);

  const handlePageSizeChange = async (size: number) => {
    const success = await updatePageSize(size);
    if (!success) {
      return;
    }

    setPageSize(size);
  };

  const loadTotal = useCallback(async () => {
    const storedProjectIds = await readProjectsIds();
    setTotal(storedProjectIds.length);
  }, [projects]);

  usePolling(loadTotal);

  return (
    <Pager
      total={total}
      currentPage={currentPage}
      pageSize={pageSize}
      pageSizes={[3, 5, 10]}
      onPageChange={(newCurrentPage) => setCurrentPage(newCurrentPage)}
      onPageSizeChange={(newPageSize) => handlePageSizeChange(newPageSize)}
    />
  );
};
