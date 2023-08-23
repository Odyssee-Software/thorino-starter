import { PageRouter ,Page } from "thorium-framework";
import { HelloWorld } from "../components/helloWorld";

export default <PageRouter>
  <Page name = "" childrens={[<HelloWorld/>]}/>
</PageRouter>;