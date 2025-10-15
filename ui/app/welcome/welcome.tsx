import type { LoaderFunction } from "react-router";

export const loader: LoaderFunction = async () => {
  // Handle the request here, e.g., fetch data
  return { message: "Welcome to React Router!" };
};

export function Welcome() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
      <img src='../../public/robot.png' />
      <div style={{color: 'black', fontSize: '2.3em', marginTop: '40px'}}>ML/AI on Devices</div>
    </div>
  );
}


