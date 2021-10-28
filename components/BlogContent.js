import BlockContent from "@sanity/block-content-to-react";
import HighlightCode from "./HighlightCode";
import { urlFor } from "lib/api";
import { style } from "dom-helpers";

const serializer = {
  types: {
    code: ({ node: { language, code, filename } }) => {
      return (
        <HighlightCode language={language}>
          {code}
          <div className="code-filename">{filename}</div>
        </HighlightCode>
      );
    },
    image: ({ node: { asset, alt, position = "center" } }) => {
      return (
        <div className={`blog-image blog-image-${position}`}>
          <img src={urlFor(asset.url).height(300).fit("max").url()} alt={alt} />
          <div className="image-alt">{alt}</div>
        </div>
      );
    },
  },
};

export default function BlogContent({ content }) {
  return <BlockContent serializers={serializer} blocks={content} />;
}
