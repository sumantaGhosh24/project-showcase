import ProjectDetailed from "@/components/ProjectDetailed";
import {getProject} from "@/sanity/actions";

export const revalidate = 900;

const Page = async ({params}: {params: {slug: string}}) => {
  const project = await getProject(params.slug);

  return (
    <>
      <ProjectDetailed
        title={project.title}
        description={project.description}
        githubLink={project.githubLink}
        content={project.content}
        category={project.category}
        tags={project.tags}
        video={project.video}
        image={project.image}
        pages={project.pages}
      />
    </>
  );
};

export default Page;
