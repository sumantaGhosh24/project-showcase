import {groq} from "next-sanity";

import {readClient} from "./lib/client";
import {buildQuery} from "./utils";

export const getCategory = async () => {
  try {
    const category = await readClient.fetch(
      groq`*[_type == "category"]{
          _id,
          name,
          slug,
          image,
        }`
    );
    return category;
  } catch (error) {
    console.log(error);
  }
};

interface GetProjectsParams {
  query: string;
  category: string;
}

export const getProjects = async (params: GetProjectsParams) => {
  const {query, category} = params;

  try {
    const projects = await readClient.fetch(
      groq`${buildQuery({
        type: "project",
        query,
        category,
      })}{
        _id,
        title,
        description,
        content,
        tags,
        'category': category->{
          ...,
          image{
            asset->{
              url,
              metadata
            },
            hotspot,
            crop
          }
        },
        image[]{
          _key,
          asset->{
            url,
            metadata
          },
          hotspot,
          crop
        }
      }`
    );

    return projects;
  } catch (error) {
    console.log(error);
  }
};

export const getProject = async (id: string) => {
  try {
    const project = await readClient.fetch(
      groq`*[_type == "project" && _id == "${id}"]{
        _id,
        title,
        description,
        githubLink,
        content,
        tags,
        'category': category->{
          ...,
          image{
            asset->{
              url,
              metadata
            },
            hotspot,
            crop
          }
        },
        image[]{
          _key,
          asset->{
            url,
            metadata
          },
          hotspot,
          crop
        },
        video,
        pages[]->{
          _id,
          title,
          description,
          content,
          image[]{
            _key,
            asset->{
              url,
              metadata
            },
            hotspot,
            crop
          },
          video
        }
      }[0]`
    );

    return project;
  } catch (error) {
    console.log(error);
  }
};
