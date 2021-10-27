import BlockContent from "@sanity/block-content-to-react";
import HighlightCode from "./HighlightCode";

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
  },
};

export default function BlogContent({ content }) {
  return (
    <BlockContent
      imageOptions={{ w: 320, h: 240, fit: "max" }}
      serializers={serializer}
      blocks={content}
    />
  );
}
