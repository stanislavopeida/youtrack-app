import { ChangeEvent, memo, useCallback, useState } from "react";

import Button from "@jetbrains/ring-ui-built/components/button/button";
import { Grid, Row, Col } from "@jetbrains/ring-ui-built/components/grid/grid";
import Toggle, {
  Size,
} from "@jetbrains/ring-ui-built/components/toggle/toggle";

import { usePolling } from "src/hooks/usePolling";
import { createMockProjects } from "src/utils/mockProjects";
import { deleteAllProjects } from "src/utils/projects";
import { readToggleState, updateToggleState } from "src/utils/toggle";

interface ProjectsActionsProps {
  onProjectsChanged?: () => Promise<void>;
}

const ProjectsActionsComponent = ({
  onProjectsChanged,
}: ProjectsActionsProps) => {
  const [enabled, setEnabled] = useState(false);

  const loadToggleState = useCallback(async () => {
    const toggleState = await readToggleState();
    setEnabled(toggleState);
  }, []);

  const handleToggle = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const success = await updateToggleState(event.target.checked);
      if (!success) {
        return;
      }

      await loadToggleState();
    },
    [loadToggleState]
  );

  usePolling(loadToggleState);

  const handleCreateMockProjects = useCallback(async () => {
    await createMockProjects();
    if (onProjectsChanged) {
      await onProjectsChanged();
    }
  }, [onProjectsChanged]);

  const handleDeleteAllProjects = useCallback(async () => {
    await deleteAllProjects();
    if (onProjectsChanged) {
      await onProjectsChanged();
    }
  }, [onProjectsChanged]);

  return (
    <Grid>
      <Row middle="xs">
        <Col className="projectsActionsItem">
          <Button primary onClick={handleCreateMockProjects}>
            Create mock projects
          </Button>
        </Col>

        <Col className="projectsActionsItem">
          <Button primary onClick={handleDeleteAllProjects}>
            Delete all projects
          </Button>
        </Col>

        <Col className="projectsActionsItem">
          <Toggle
            size={Size.Size20}
            leftLabel="Toggle"
            checked={enabled}
            onChange={handleToggle}
          />
        </Col>
      </Row>
    </Grid>
  );
};

export const ProjectsActions = memo(ProjectsActionsComponent);
