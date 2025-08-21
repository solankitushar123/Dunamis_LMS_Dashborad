import { useParams } from "react-router-dom";
import Create from "./ContentCreate";

const ContentEdit = () => {
  const { id } = useParams();

  const courseToEdit = {
    id: "MUS84943",
    category: "Music",
    subcategory: "Keyboard",
    title: "Keyboard Fundamentals",
    duration: 12,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    avatar: "https://i.pravatar.cc/40?u=a042581f4e29026704d",
    curriculum: [
      {
        duration: "2w",
        moduleName: "Module 1: Name of Module",
        lessons: [
          {
            lessonName: "Lesson 1.1: Name of Lesson",
            topics: [
              {
                topicName: "Topic 1.1.1: Name of Topic",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
              },
              {
                topicName: "Topic 1.1.2: Name of Topic",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
              },
            ],
          },
          {
            lessonName: "Lesson 1.2: Name of Lesson",
            topics: [
              {
                topicName: "Topic 1.2.1: Name of Topic",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
              },
              {
                topicName: "Topic 1.2.2: Name of Topic",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
              },
            ],
          },
        ],
      },
    ],
  };

  return <Create isEdit={true} initialCourse={courseToEdit} />;
};

export default ContentEdit;
