import { Button } from "../Button";

interface Props {
  name: string;
}
export const Hello = ({ name }: Props) => (
  <div>
    <p className="white">Hey {name}, Yeee Hawwww.</p>
    <Button className="">Click Me</Button>
    <p>className="white"Button is{typeof Button}</p>
    <p className="white">it worked</p>
  </div>
);
