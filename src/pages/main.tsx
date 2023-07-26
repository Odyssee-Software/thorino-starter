import { PageRouter ,Page } from "../thorium";
import { HelloWorld } from "../components/helloWorld";

export default <PageRouter>
  <Page name = "" childrens={[<HelloWorld/>]}/>
</PageRouter>;