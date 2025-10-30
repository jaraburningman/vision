import type {Route} from "../../.react-router/types/app/routes/+types/home";
import './training.css';

import type { LoaderFunction } from "react-router";

export const loader: LoaderFunction = async () => {
  // Handle the request here, e.g., fetch data
  return { message: "Welcome to React Router!" };
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Training Model (TensorFlow)" },
    { name: "description", content: "Training Model (TensorFlow)" },
  ];
}

export default function Training() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', textAlign: 'center'}}>
      <img src='../../public/robot.png' />
      <div style={{color: 'black', fontSize: '2.1em', marginTop: '40px'}}>Training Model (TensorFlow)</div>
      <p style={{color: 'black', fontSize: '1.3em', marginTop: '20px'}}>
        Model training capabilities
      </p>
    </div>
  );
}
