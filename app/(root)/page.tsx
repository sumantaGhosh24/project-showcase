import SearchForm from "@/components/SearchForm";
import Filters from "@/components/Filters";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import {getCategory, getProjects} from "@/sanity/actions";

export const revalidate = 900;

interface Props {
  searchParams: {[key: string]: string | undefined};
}

const Page = async ({searchParams}: Props) => {
  const projects = await getProjects({
    query: searchParams?.query || "",
    category: searchParams?.category || "",
  });

  const category = await getCategory();

  return (
    <>
      <section className="bg-image relative h-[500px]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto flex h-full items-center justify-center">
          <div className="z-10 text-center text-white">
            <h1 className="mb-24 text-center text-5xl font-bold leading-10 text-white sm:text-6xl sm:leading-10">
              Project Showcase
            </h1>
            <SearchForm />
            <Filters category={category} />
          </div>
        </div>
      </section>
      <section className="mb-5 mt-10">
        <Header
          query={searchParams?.query || ""}
          category={searchParams?.category || ""}
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {projects?.length > 0 ? (
            projects.map((project: any) => (
              <ProjectCard
                key={project._id}
                id={project._id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                category={project.category}
                image={project.image}
              />
            ))
          ) : (
            <p className="">No resources found</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Page;
