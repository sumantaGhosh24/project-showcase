const schema = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "content",
      title: "Content",
      type: "text",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{type: "string"}],
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{type: "category"}],
    },
    {
      name: "image",
      title: "Images",
      type: "array",
      of: [{type: "image", options: {hotspot: true}}],
    },
    {
      name: "video",
      title: "Videos",
      type: "array",
      of: [{type: "url", options: {hotspot: true}}],
    },
    {
      name: "pages",
      title: "Pages",
      type: "array",
      of: [{type: "reference", to: [{type: "page"}]}],
    },
  ],
};

export default schema;
