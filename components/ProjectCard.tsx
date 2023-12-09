import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

interface Props {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: any;
  image: any[];
}

const ProjectCard = ({
  id,
  title,
  description,
  tags,
  category,
  image,
}: Props) => {
  return (
    <Card>
      <Link href={`project/${id}`}>
        <CardHeader className="p-3">
          <div className="mb-4 overflow-hidden">
            <Image
              src={image[0].asset.url}
              className="w-full rounded transition-all duration-300 ease-linear hover:scale-125"
              width={384}
              height={440}
              alt={title}
            />
          </div>
          <CardTitle className="capitalize">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-3">
          <CardDescription className="mb-4 first-letter:uppercase">
            {description}
          </CardDescription>
          <span>
            Category:{" "}
            <Badge className="text-xs md:text-sm">{category.name}</Badge>
          </span>
          <br />
          <br />
          <span>
            Tags:{" "}
            {tags.map((tag: string) => (
              <Badge key={tag} className="my-1 mr-1.5 text-xs md:text-sm">
                {tag}
              </Badge>
            ))}
          </span>
        </CardContent>
      </Link>
    </Card>
  );
};

export default ProjectCard;
