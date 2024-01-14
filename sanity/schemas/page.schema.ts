const schema = {
  name: "page",
  title: "Page",
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
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
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
  ],
};

export default schema;
