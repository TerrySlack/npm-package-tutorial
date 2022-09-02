"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var Hello_1 = require("./shared/components/Hello");
var Button_1 = require("./shared/components/Button");
Object.defineProperty(exports, "Button", { enumerable: true, get: function () { return Button_1.Button; } });
require("./index.css");
// interface Props {
//   name: string;
// }
// export const SayHello = ({ name }: Props) => (
//   <div>
//     <p>Hey {name}, say hello to TypeScript.</p>
//     <Button className="">Click Me</Button>
//     <p>it worked</p>
//   </div>
// );
exports.default = Hello_1.Hello;
