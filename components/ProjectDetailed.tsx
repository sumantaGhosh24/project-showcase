"use client";

import Image from "next/image";
import {Github, ExternalLink, ClipboardCopy, Eye} from "lucide-react";
import {PortableText} from "@portabletext/react";

import {Badge} from "@/components/ui/badge";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

import ProjectMedia from "./ProjectMedia";

interface Props {
  title: string;
  description: string;
  githubLink: string;
  liveLink?: string;
  content: any;
  category: any;
  tags: string[];
  image: any[];
  video: any[];
  pages: any[];
}

const customizeComponent = {
  block: {
    h1: ({children}: {children: any}) => (
      <h1 className="mb-4 text-3xl font-bold">{children}</h1>
    ),
    h2: ({children}: {children: any}) => (
      <h2 className="mb-4 text-2xl font-bold">{children}</h2>
    ),
    h3: ({children}: {children: any}) => (
      <h3 className="mb-4 text-xl font-bold">{children}</h3>
    ),
    h4: ({children}: {children: any}) => (
      <h4 className="mb-4 text-lg font-bold">{children}</h4>
    ),
    h5: ({children}: {children: any}) => (
      <h5 className="mb-4 text-base font-bold">{children}</h5>
    ),
    h6: ({children}: {children: any}) => (
      <h6 className="mb-4 text-sm font-bold">{children}</h6>
    ),
    blockquote: ({children}: {children: any}) => (
      <blockquote className="mb-4 border-l-4 border-gray-500 pl-4 italic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({children, value}: {children: any; value: any}) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value.href}
          target={"_blank"}
          rel={rel}
          className="text-blue-500 underline"
        >
          {children}
        </a>
      );
    },
    strong: ({children}: {children: any}) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({children}: {children: any}) => <em className="italic">{children}</em>,
    underline: ({children}: {children: any}) => <u>{children}</u>,
    strikeThrough: ({children}: {children: any}) => <s>{children}</s>,
    code: ({text}: {text: any}) => {
      return <code className="bg-gray-200 px-1 text-black">{text}</code>;
    },
  },
  list: {
    bullet: ({children}: {children: any}) => (
      <ul className="ml-6 list-disc">{children}</ul>
    ),
    number: ({children}: {children: any}) => (
      <ol className="ml-6 list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({children}: {children: any}) => (
      <li style={{listStyleType: "disclosure-closed"}} className="ml-[20px]">
        {children}
      </li>
    ),
  },
};

const ProjectDetailed = ({
  title,
  description,
  githubLink,
  liveLink,
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
        height={400}
        width={1200}
        className="h-[350px] w-full rounded object-cover"
      />
      <div>
        <h2 className="my-5 text-2xl font-semibold capitalize leading-none tracking-tight">
          {title}
        </h2>
        <h3 className="mb-5 text-base">{description}</h3>
        <PortableText value={content} components={customizeComponent as any} />
        <p className="my-5 flex max-w-fit items-center rounded-md bg-primary-foreground p-2">
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
        {liveLink && (
          <p className="mb-4 flex max-w-fit items-center rounded-md bg-primary-foreground p-2">
            <Eye />
            <span className="mx-3 font-extrabold">Live demo</span>{" "}
            <a href={liveLink} target="_blank">
              <ExternalLink />
            </a>{" "}
            <ClipboardCopy
              onClick={() => navigator.clipboard.writeText(liveLink)}
              className="ml-3 cursor-pointer"
            />
          </p>
        )}
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
      {pages?.length > 0 && (
        <>
          <h3 className="mt-5 text-xl font-bold">Pages ({pages.length})</h3>
          <Tabs defaultValue={pages[0].title} className="w-full">
            <TabsList className="mb-3">
              {pages.map((page) => (
                <TabsTrigger key={page._id} value={page.title}>
                  {page.title.split("-")[page.title.split("-").length - 1]}
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
                      {page.title.split("-")[page.title.split("-").length - 1]}
                    </h2>
                    <h3 className="mb-4 text-base">{page.description}</h3>
                    <PortableText
                      value={page.content}
                      components={customizeComponent as any}
                    />
                  </div>
                  <ProjectMedia image={page.image} video={page.video} />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </>
      )}
    </div>
  );
};

export default ProjectDetailed;
