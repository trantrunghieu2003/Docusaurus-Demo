import { Redirect } from "@docusaurus/router";
import type { ReactNode } from "react";
import routes from "../constants/routes";

export default function Home(): ReactNode {
  return <Redirect to={routes.docs} />;
}
