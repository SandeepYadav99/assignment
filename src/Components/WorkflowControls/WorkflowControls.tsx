import { Edge, Node } from "reactflow";

export const initialEdges: Edge[] = [];

export const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: -200, y: 20 },
    data: { amount: 10 },
    type: "paymentInit",
  },
  {
    id: "2",
    position: { x: -20, y: -50 },
    data: { currency:"$", country:"United State" , countryCode:"US"},
    type: "paymentCounter",
  },
  {
    id: "3",
    position: { x: -20, y: 80 },
    data: { currency:"£", country:"England" , countryCode:"GB"},
    type: "paymentCounter",
  },
  

  {
    id: "4",
    position: { x: 350, y: 20 },
    data: { name: "Google Pay", code:"Gp"},
    type: "paymentProvider",
  },
  // {
  //   id: "5",
  //   position: { x: 350, y: 100 },
  //   data: { name: "Stripe", code:"St"},
  //   type: "paymentProvider",
  // },
  // {
  //   id: "6",
  //   position: { x: 350, y: 180 },
  //   data: { name: "Apple Pay", code:"Ap"},
  //   type: "paymentProvider",
  // },
  {
    id: "7",
    position: { x: 80, y: -120 },
    data: {},
    type: "paymentSelectProvider",
  },
];
