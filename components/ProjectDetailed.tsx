"use client";

import Image from "next/image";
import {Github, ExternalLink, ClipboardCopy} from "lucide-react";

import {Badge} from "@/components/ui/badge";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import ProjectMedia from "./ProjectMedia";

interface Props {
  title: string;
  description: string;
  githubLink: string;
  content: any;
  category: any;
  tags: string[];
  image: any[];
  video: any[];
  pages: any[];
}

const ProjectDetailed = ({
  title,
  description,
  githubLink,
  content,
  category,
  tags,
  image,
  video,
  pages,
}: Props) => {
  return (
    <div className="mx-auto max-w-6xl">
      <Image
        src={image[0].asset.url}
        alt="primary image"
        height={100}
        width={100}
        className="h-[350px] w-full rounded object-cover"
      />
      <div>
        <h2 className="my-5 text-2xl font-semibold capitalize leading-none tracking-tight">
          {title}
        </h2>
        <h3 className="mb-4 text-base">{description}</h3>
        <h3 className="mb-4 text-sm text-muted-foreground">{content}</h3>
        <p className="mb-4 flex max-w-fit items-center rounded-md bg-primary-foreground p-2">
          <Github />
          <span className="mx-3 font-extrabold">
            Github code repertory
          </span>{" "}
          <a href={githubLink} target="_blank">
            <ExternalLink />
          </a>{" "}
          <ClipboardCopy
            onClick={() => navigator.clipboard.writeText(githubLink)}
            className="ml-3 cursor-pointer"
          />
        </p>
        <span className="mb-5 flex items-center font-bold">
          Category:{" "}
          <Badge className="ml-2 text-xs font-normal md:text-sm">
            <Image
              src={category.image.asset.url}
              alt="Category"
              height={50}
              width={50}
              className="mr-2 h-8 w-8 rounded-full object-cover"
            />
            {category.name}
          </Badge>
        </span>
        <span className="font-bold">
          Tags/Technologies:{" "}
          {tags?.map((tag: string) => (
            <Badge key={tag} className="mr-1.5 text-xs font-normal md:text-sm">
              {tag}
            </Badge>
          ))}
        </span>
      </div>
      <ProjectMedia image={image} video={video} />
      <h3 className="mt-5 text-xl font-bold">Pages ({pages.length})</h3>
      <Tabs defaultValue="home" className="w-full">
        <TabsList>
          {pages.map((page) => (
            <TabsTrigger key={page._id} value={page.title}>
              {page.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {pages.map((page) => (
          <TabsContent key={page._id} value={page.title}>
            <div className="mx-auto w-full">
              <Image
                src={page.image[0].asset.url}
                alt="primary image"
                height={100}
                width={100}
                className="h-[350px] w-full rounded object-cover"
              />
              <div>
                <h2 className="my-5 text-2xl font-semibold capitalize leading-none tracking-tight">
                  {page.title}
                </h2>
                <h3 className="mb-4 text-base">{page.description}</h3>
                <h3 className="mb-4 text-sm text-muted-foreground">
                  {page.content}
                </h3>
              </div>
              <ProjectMedia image={page.image} video={page.video} />
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ProjectDetailed;
