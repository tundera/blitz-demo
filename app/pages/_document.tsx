import {Document, Html, DocumentHead, Main, BlitzScript /*DocumentContext*/} from 'blitz'

import { computeCsp } from "app/core/secureheaders";

class MyDocument extends Document {
  // Only uncomment if you need to customize this behaviour
  // static async getInitialProps(ctx: DocumentContext) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return {...initialProps}
  // }

  render() {
    return (
      <Html lang="en">
        <DocumentHead>
          <meta httpEquiv="Content-Security-Policy" content={computeCsp(this.props)} />
          <meta httpEquiv="Referrer-Policy" content="origin-when-cross-origin" />
        </DocumentHead>
        <body>
          <Main />
          <BlitzScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument
