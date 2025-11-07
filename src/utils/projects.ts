import { Project } from "src/types/youtrackApi";

const host = await YTApp.register();

export const readProjects = async (skip?: number, top?: number) => {
  const leaderAttributes =
    "id,login,fullName,name,email,avatarUrl,banned,online";
  const teamAttributes = "id,name";
  const projectAttributes = `id,name,description,shortName,leader(${leaderAttributes}),team(${teamAttributes})`;

  const projects = await host.fetchYouTrack<Project[]>("admin/projects", {
    query: {
      fields: projectAttributes,
      $skip: skip,
      $top: top,
    },
  });

  return projects;
};

const PROJECTS_BATCH_SIZE = 70;

export const readProjectsIds = async () => {
  const readProjectsIdsRec = async (
    skip: number = 0,
    top: number = PROJECTS_BATCH_SIZE,
    projectIds: string[] = []
  ) => {
    const response = await host.fetchYouTrack<Project[]>("admin/projects", {
      query: {
        fields: "id",
        $skip: skip,
        $top: top,
      },
    });

    if (response.length === 0) {
      return projectIds;
    }

    const newProjectsIds = response.map((project) => project.id ?? "");
    return await readProjectsIdsRec(
      skip + PROJECTS_BATCH_SIZE,
      top + PROJECTS_BATCH_SIZE,
      projectIds.concat(newProjectsIds)
    );
  };

  return await readProjectsIdsRec();
};

export const createProject = async (
  { name, shortName, description }: Project,
  leaderId: string
) =>
  await host.fetchYouTrack<Project>("admin/projects", {
    method: "POST",
    query: { fields: "id,name,shortName,leader(id)" },
    body: {
      name,
      shortName,
      description,
      leader: {
        id: leaderId,
      },
    },
  });

export const deleteAllProjects = async () => {
  const projectsIds = await readProjectsIds();
  for (const projectId of projectsIds) {
    await host.fetchYouTrack(`admin/projects/${projectId}`, {
      method: "DELETE",
    });
  }
};
