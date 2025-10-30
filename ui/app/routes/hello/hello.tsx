import type { Route } from "./+types/objects-detection";
import './hello.css';
import { useEffect } from "react";
import { useHeader } from "../../context/header-context";

const title = "Hello";
const description = 'AI and Machine Learning on Devices';

export function meta({}: Route.MetaArgs) {
  return [
    { title: `Vision | ${title} | ${description}` },
    { name: "description", content: description },
  ];
}

export default function Hello() {
  const { setTitle, setDescription } = useHeader();
  useEffect(() => {
    setTitle(title);
    setDescription(description);
  }, [setTitle, setDescription]);

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', textAlign: 'center'}}>
      <img className="hello-robot" src='../../public/robot.png' />
    </div>
  );
}
