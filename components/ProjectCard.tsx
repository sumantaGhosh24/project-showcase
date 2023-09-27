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
        <CardHeader>
          <div className="mb-4">
            <Image
              src={image[0].asset.url}
              className="w-full"
              width={384}
              height={440}
              alt={title}
            />
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      </Link>
      <CardContent>
        <CardDescription className="mb-4">{description}</CardDescription>
        <span>
          Category: <Badge className="text-base">{category.name}</Badge>
        </span>
        <br />
        <br />
        {tags.map((tag: string) => (
          <Badge key={tag} className="mr-5 text-sm">
            {tag}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
