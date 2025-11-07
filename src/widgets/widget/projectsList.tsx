import { memo } from "react";

import Avatar from "@jetbrains/ring-ui-built/components/avatar/avatar";
import UserCardTooltip from "@jetbrains/ring-ui-built/components/user-card/tooltip";
import { Grid, Row, Col } from "@jetbrains/ring-ui-built/components/grid/grid";
import Link from "@jetbrains/ring-ui-built/components/link/link";
import Tag from "@jetbrains/ring-ui-built/components/tag/tag";

import { Project } from "src/types/youtrackApi";
import { markdown } from "src/utils/markdown";
import { PagerWrapper } from "src/widgets/widget/pagerWrapper";

type ProjectsListProps = {
  projects: Project[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pageSize: number;
  setPageSize: (size: number) => void;
};

const ProjectsListComponent = ({
  projects,
  currentPage,
  setCurrentPage,
  pageSize,
  setPageSize,
}: ProjectsListProps) => (
  <Grid role="list" className="projectsList">
    <Row top="xs">
      <Col xs={1}>
        <strong>Leader</strong>
      </Col>

      <Col xs={8}>
        <div className="projectInfo">
          <strong>Project</strong>
        </div>
      </Col>

      <Col xs={3}>
        <div className="projectTeam">
          <strong>Team</strong>
        </div>
      </Col>
    </Row>

    {projects.map((project) => {
      const projectLeader = {
        login: project.leader?.login,
        name: project.leader?.name,
        email: project.leader?.email,
        avatarUrl: project.leader?.avatarUrl,
        href: `/users/${project.leader?.id}`,
        banned: project.leader?.banned,
        online: project.leader?.online,
      };

      return (
        <div role="listitem" key={project.id} className="projectsListItem">
          <Row middle="xs">
            <Col xs={1}>
              <UserCardTooltip user={projectLeader}>
                <Link href={`/users/${project.leader?.id}`}>
                  <Avatar size={24} url={project.leader?.avatarUrl} />
                </Link>
              </UserCardTooltip>
            </Col>

            <Col xs={8}>
              <div className="projectInfo">
                <div className="projectHeader">
                  <Link href={`/projects/${project.id}`}>{project.name}</Link>
                  {project.shortName && <Tag>{project.shortName}</Tag>}
                </div>

                {project.description && (
                  <div className="ring-secondary" title={project.description}>
                    {markdown(project.description, {
                      containerClassName: "projectDescription",
                    })}
                  </div>
                )}
              </div>
            </Col>

            <Col xs={3}>
              <div
                className="projectTeam ring-secondary"
                title={project.team?.name}
              >
                <Link href={`/projects/${project.id}?tab=team`}>
                  {project.team?.name}
                </Link>
              </div>
            </Col>
          </Row>
        </div>
      );
    })}

    <Row top="xs">
      <Col xs={12}>
        <PagerWrapper
          projects={projects}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      </Col>
    </Row>
  </Grid>
);

export const ProjectsList = memo(ProjectsListComponent);
