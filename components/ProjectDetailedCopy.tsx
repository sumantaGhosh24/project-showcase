"use client";

import Image from "next/image";
import {useState} from "react";
import {Github} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const nextImageSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === image.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImageSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? image.length - 1 : prevIndex - 1
    );
  };

  const nextVideoSlide = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === video.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevVideoSlide = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? video.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <Card className="mt-5">
        <div className="relative mx-auto w-full max-w-screen-lg">
          {image.map((el, index) => (
            <div
              key={index}
              className={`${
                index === currentImageIndex ? "block" : "hidden"
              }  h-full w-full transition-opacity duration-500 ease-in-out`}
            >
              <Image
                src={el.asset.url}
                alt={`Slide ${index}`}
                height={400}
                width={600}
                className="h-[350px] w-full object-cover"
              />
            </div>
          ))}
          <button
            onClick={prevImageSlide}
            className="absolute left-2 top-1/2 h-[40px] w-[40px] -translate-y-1/2 rounded-full bg-gray-900 p-2 text-white focus:outline-none"
          >
            &larr;
          </button>
          <button
            onClick={nextImageSlide}
            className="absolute right-2 top-1/2 h-[40px] w-[40px] -translate-y-1/2 rounded-full bg-gray-900 p-2 text-white focus:outline-none"
          >
            &rarr;
          </button>
        </div>
        <CardContent>
          <CardTitle className="mb-4 mt-5 capitalize">{title}</CardTitle>
          <CardDescription className="mb-4">{description}</CardDescription>
          <a href={githubLink} target="_blank" className="mb-4">
            <Github />
          </a>
          <CardDescription className="mb-4">{content}</CardDescription>
          <span>
            Category: <Badge className="text-base">{category.name}</Badge>
          </span>
          <br />
          <br />
          <span>
            Tags:{" "}
            {tags?.map((tag: string) => (
              <Badge key={tag} className="mr-3 text-sm">
                {tag}
              </Badge>
            ))}
          </span>
        </CardContent>
        <div className="relative mx-auto w-full max-w-screen-lg">
          {video.map((el, index) => (
            <div
              key={index}
              className={`${
                index === currentVideoIndex ? "block" : "hidden"
              }  h-full w-full transition-opacity duration-500 ease-in-out`}
            >
              <video
                src={el}
                className="h-[350px] w-full object-cover"
                controls
              ></video>
            </div>
          ))}
          <button
            onClick={prevVideoSlide}
            className="absolute left-2 top-1/2 h-[40px] w-[40px] -translate-y-1/2 rounded-full bg-gray-900 p-2 text-white focus:outline-none"
          >
            &larr;
          </button>
          <button
            onClick={nextVideoSlide}
            className="absolute right-2 top-1/2 h-[40px] w-[40px] -translate-y-1/2 rounded-full bg-gray-900 p-2 text-white focus:outline-none"
          >
            &rarr;
          </button>
        </div>
      </Card>
      <h3 className="mt-10 text-xl font-bold">Pages</h3>
      <Tabs defaultValue="home" className="mt-5 w-full">
        <TabsList>
          {pages.map((page) => (
            <TabsTrigger key={page._id} value={page.title}>
              {page.title}
            </TabsTrigger>
          ))}
        </TabsList>
        {pages.map((page) => (
          <TabsContent key={page._id} value={page.title}>
            <Card className="mt-5">
              <div className="ml-5 mt-5 flex flex-wrap gap-4 rounded">
                {page.image.map((el: any, index: number) => (
                  <div key={index}>
                    <Image
                      src={el.asset.url}
                      alt={`Slide ${index}`}
                      height={400}
                      width={600}
                      className="h-[250px] w-[250px] object-cover"
                    />
                  </div>
                ))}
              </div>
              <CardContent>
                <CardTitle className="mb-4 mt-5 capitalize">
                  {page.title}
                </CardTitle>
                <CardDescription className="mb-4">
                  {page.description}
                </CardDescription>
                <CardDescription className="mb-4">
                  {page.content}
                </CardDescription>
              </CardContent>
              <div className="ml-5 flex flex-wrap gap-4 rounded">
                {page.video.map((el: string, index: number) => (
                  <div key={index}>
                    <video
                      src={el}
                      className="h-[250px] w-[250px] object-cover"
                      controls
                    ></video>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
};

export default ProjectDetailed;
